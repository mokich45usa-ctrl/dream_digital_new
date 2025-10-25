"use client"

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

interface FloatingChatButtonProps {
  onClick: () => void;
  isDrawerOpen: boolean;
  ready?: boolean; // when true, page is visible (loading screen hidden)
}

export function FloatingChatButton({ onClick, isDrawerOpen, ready = true }: FloatingChatButtonProps) {
  const [showTeaser, setShowTeaser] = useState(false);
  const shownThisLoadRef = useRef(false);
  const [bottomOffset, setBottomOffset] = useState(24); // px

  useEffect(() => {
    if (!ready || isDrawerOpen || shownThisLoadRef.current) return;
    const timer = setTimeout(() => {
      shownThisLoadRef.current = true;
      setShowTeaser(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isDrawerOpen, ready]);

  useEffect(() => {
    if (!showTeaser) return;
    const hideTimer = setTimeout(() => setShowTeaser(false), 6000);
    return () => clearTimeout(hideTimer);
  }, [showTeaser]);

  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const detail = (e as CustomEvent).detail as { visible?: boolean; height?: number };
        const extra = detail?.visible ? Math.min(96, Math.max(0, (detail.height ?? 0))) : 0;
        setBottomOffset(24 + extra);
      } catch {
        setBottomOffset(24);
      }
    };
    window.addEventListener('cookie-banner-visibility', handler as EventListener);
    return () => window.removeEventListener('cookie-banner-visibility', handler as EventListener);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isDrawerOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => { setShowTeaser(false); onClick(); }}
            style={{ bottom: bottomOffset }}
            className="fixed right-6 z-50 w-14 h-14 bg-accent-dark text-white flex items-center justify-center shadow-xl hover:bg-accent-dark-soft transition-all duration-200"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTeaser && !isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            style={{ bottom: bottomOffset + 8 }}
            className="fixed right-24 z-60 bg-accent-dark text-white border border-border shadow-elevated px-3 py-1.5 rounded-full flex items-center gap-2 cursor-pointer select-none"
            onClick={() => { setShowTeaser(false); onClick(); }}
            role="button"
            aria-label="Open chat assistant"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium">I'm online.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}