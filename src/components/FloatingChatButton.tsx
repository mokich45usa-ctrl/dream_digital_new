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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 max-w-[240px] bg-white border border-border shadow-elevated px-4 py-3"
            onClick={() => setShowTeaser(false)}
            role="status"
            aria-live="polite"
          >
            <div className="text-sm text-text-primary font-medium">Need help? Chat with Dreamy</div>
            <div className="text-xs text-text-secondary mt-1">I'm here and ready to assist</div>
            <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}