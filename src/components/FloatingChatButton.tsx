"use client"

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingChatButtonProps {
  onClick: () => void;
  isDrawerOpen: boolean;
}

export function FloatingChatButton({ onClick, isDrawerOpen }: FloatingChatButtonProps) {
  return (
    <AnimatePresence>
      {!isDrawerOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClick}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent-dark text-white flex items-center justify-center shadow-xl hover:bg-accent-dark-soft transition-all duration-200 lg:hidden"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}