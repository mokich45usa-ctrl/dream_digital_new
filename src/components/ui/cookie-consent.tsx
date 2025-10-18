"use client"

import { useEffect, useMemo, useState } from 'react';
import { Button } from './button';

type ConsentCategories = {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
};

type StoredConsent = {
  version: number;
  timestamp: string;
  categories: ConsentCategories;
};

const CONSENT_VERSION = 2; // bump on policy changes

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [categories, setCategories] = useState<ConsentCategories>({
    essential: true,
    analytics: true,
    advertising: true,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cookie-consent');
      if (!stored) {
        setVisible(true);
        return;
      }
      const parsed = JSON.parse(stored) as StoredConsent | string;
      if (typeof parsed === 'string') {
        // legacy value
        setVisible(false);
        return;
      }
      if (!parsed.version || parsed.version < CONSENT_VERSION) {
        setVisible(true);
        return;
      }
      setCategories(parsed.categories);
      setVisible(false);
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (cats: ConsentCategories) => {
    const payload: StoredConsent = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      categories: cats,
    };
    try { localStorage.setItem('cookie-consent', JSON.stringify(payload)); } catch {}
    // emit event so trackers can react
    try { window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: payload })); } catch {}
  };

  const acceptAll = () => {
    const cats: ConsentCategories = { essential: true, analytics: true, advertising: true };
    persist(cats);
    setCategories(cats);
    setVisible(false);
  };

  const rejectAll = () => {
    const cats: ConsentCategories = { essential: true, analytics: false, advertising: false };
    persist(cats);
    setCategories(cats);
    setVisible(false);
  };

  const saveCustom = () => {
    persist(categories);
    setVisible(false);
    setCustomizing(false);
  };

  useEffect(() => {
    // expose a way to reopen settings later
    // @ts-ignore
    window.openCookieSettings = () => { setVisible(true); setCustomizing(true); };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 px-4 pb-4">
      <div className="mx-auto max-w-[1080px] rounded-soft border-2 border-border bg-elevated shadow-elevated p-4 sm:p-5">
        {customizing ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-text-primary font-semibold">Cookie Preferences</h3>
              <p className="text-sm text-text-secondary">Manage which types of cookies we can use. Read our{' '}
                <a href="/cookies.html" target="_blank" rel="noopener noreferrer" className="underline">Cookie Policy</a>.</p>
            </div>
            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked readOnly className="mt-1" />
                <div>
                  <div className="text-sm text-text-primary font-medium">Essential</div>
                  <div className="text-xs text-text-secondary">Required for site functionality and cannot be disabled.</div>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={categories.analytics} onChange={e => setCategories(c => ({ ...c, analytics: e.target.checked }))} className="mt-1" />
                <div>
                  <div className="text-sm text-text-primary font-medium">Analytics (GA4)</div>
                  <div className="text-xs text-text-secondary">Helps us understand site usage to improve performance.</div>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={categories.advertising} onChange={e => setCategories(c => ({ ...c, advertising: e.target.checked }))} className="mt-1" />
                <div>
                  <div className="text-sm text-text-primary font-medium">Advertising (Google Ads)</div>
                  <div className="text-xs text-text-secondary">Used for personalized ads and remarketing.</div>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Button onClick={() => { setCustomizing(false); }} variant="ghost" className="h-auto px-4 py-2">Back</Button>
              <Button onClick={rejectAll} variant="ghost" className="h-auto px-4 py-2">Reject all</Button>
              <Button onClick={saveCustom} className="bg-accent-dark text-white hover:bg-accent-dark-soft shadow-soft h-auto px-4 py-2">Save preferences</Button>
            </div>
          </div>
        ) : (
          <div className="sm:flex sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-text-secondary">
              We use cookies to improve your experience, analyze traffic, and for ads. Read our{' '}
              <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a> and{' '}
              <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="underline">Terms & Conditions</a>.
            </p>
            <div className="mt-3 sm:mt-0 flex items-center gap-2">
              <Button onClick={() => setCustomizing(true)} variant="outline" className="h-auto px-3 py-2">Customize</Button>
              <Button onClick={acceptAll} className="bg-accent-dark text-white hover:bg-accent-dark-soft shadow-soft px-4 py-2 h-auto">Accept</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


