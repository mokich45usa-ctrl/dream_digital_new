"use client"

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface FloatingChatButtonProps {
  onClick: () => void;
  isDrawerOpen: boolean;
  ready?: boolean; // when true, page is visible (loading screen hidden)
}

export function FloatingChatButton({ onClick, isDrawerOpen, ready = true }: FloatingChatButtonProps) {
  const [showTeaser, setShowTeaser] = useState(false);

  useEffect(() => {
    if (isDrawerOpen || !ready) return;
    const alreadyShown = sessionStorage.getItem('dd_teaser_shown');
    const timer = setTimeout(() => {
      if (!alreadyShown) {
        setShowTeaser(true);
        sessionStorage.setItem('dd_teaser_shown', '1');
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [isDrawerOpen, ready]);

  useEffect(() => {
    if (!showTeaser) return;
    const hideTimer = setTimeout(() => setShowTeaser(false), 6000);
    return () => clearTimeout(hideTimer);
  }, [showTeaser]);

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
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent-dark text-white flex items-center justify-center shadow-xl hover:bg-accent-dark-soft transition-all duration-200"
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
            className="fixed bottom-8 right-24 z-50 bg-accent-dark text-white border border-border shadow-elevated px-3 py-1.5 rounded-full flex items-center gap-2"
            onClick={() => setShowTeaser(false)}
            role="status"
            aria-live="polite"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium">I'm online.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}