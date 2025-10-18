"use client"

import { useEffect, useState } from 'react';
import { Button } from './button';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cookie-consent');
      if (!stored) setVisible(true);
    } catch {}
  }, []);

  const acceptAll = () => {
    try { localStorage.setItem('cookie-consent', 'accepted'); } catch {}
    setVisible(false);
  };

  const openPrivacy = () => { try { /* @ts-ignore */ window.__openPrivacy?.(); } catch {} };
  const openTerms = () => { try { /* @ts-ignore */ window.__openTerms?.(); } catch {} };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 px-4 pb-4">
      <div className="mx-auto max-w-[1080px] rounded-soft border-2 border-border bg-elevated shadow-elevated p-4 sm:p-5">
        <div className="sm:flex sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-text-secondary">
            We use cookies to improve your experience, analyze traffic, and for ads. Read our{' '}
            <button onClick={openPrivacy} className="underline">Privacy Policy</button> and{' '}
            <button onClick={openTerms} className="underline">Terms & Conditions</button>.
          </p>
          <div className="mt-3 sm:mt-0 flex items-center gap-2">
            <Button onClick={acceptAll} className="bg-accent-dark text-white hover:bg-accent-dark-soft shadow-soft px-4 py-2 h-auto">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


