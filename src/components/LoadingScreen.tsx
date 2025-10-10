"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface LoadingScreenProps {
  onEnter: () => void;
}

const loadingStages = [
  { percent: 0, message: 'Initializing components...' },
  { percent: 15, message: 'Loading Hero section...' },
  { percent: 30, message: 'Preparing gallery...' },
  { percent: 45, message: 'Building navigation...' },
  { percent: 60, message: 'Loading portfolio...' },
  { percent: 75, message: 'Setting up AI assistant...' },
  { percent: 90, message: 'Finalizing interface...' },
  { percent: 100, message: 'Ready to launch!' },
];

export function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100 over 5 seconds
    const duration = 5000; // 5 seconds
    const steps = 100;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      // Update stage based on progress
      const stage = loadingStages.findIndex(
        (s, i) => 
          currentProgress >= s.percent && 
          (i === loadingStages.length - 1 || currentProgress < loadingStages[i + 1].percent)
      );
      if (stage !== -1) {
        setCurrentStage(stage);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] bg-bg"
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid-pattern w-full h-full" />
      </div>

      {/* Background Image - Animated Rotation - Absolute center of screen */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ 
          opacity: 0.12,
          scale: 0.6,
          rotate: -360
        }}
        transition={{
          opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
          rotate: { 
            duration: 60,
            ease: "linear",
            repeat: Infinity
          }
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] md:w-[800px] md:h-[800px] pointer-events-none z-[1]"
      >
        <img 
          src="https://lh3.googleusercontent.com/d/1fVFhlLM5VwfxTpHKibxLEi3bsM3fmquC"
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Progress Bar or Enter Button - Absolute center of screen */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-6 z-10">
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {progress < 100 ? (
                <motion.div
                  key="progress"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full"
                >
                  {/* Progress Bar */}
                  <div className="relative mb-8">
                    {/* Background */}
                    <div className="h-2 bg-surface border-2 border-border overflow-hidden">
                      {/* Progress Fill */}
                      <motion.div
                        className="h-full bg-accent-dark relative"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                      >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent-dark" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-accent-dark" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-accent-dark" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent-dark" />
                  </div>

                  {/* Loading Text & Percentage */}
                  <div className="flex items-center justify-between px-1">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentStage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="font-mono text-sm text-text-secondary tracking-wide"
                      >
                        {loadingStages[currentStage].message}
                      </motion.p>
                    </AnimatePresence>
                    
                    <motion.span
                      className="font-mono text-sm font-semibold text-text-primary tabular-nums ml-4"
                      key={progress}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.1 }}
                    >
                      {progress}%
                    </motion.span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="button"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.4, 0, 0.2, 1],
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="w-full flex items-center justify-center"
                >
                  <button 
                    onClick={onEnter}
                    className="fancy-black"
                  >
                    <span className="text">Enter</span>
                    <span className="top-key"></span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      </div>

      {/* Welcome Text - Top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center z-10 px-6 w-full"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-4 tracking-tight">
          Welcome to Dream Digital
        </h1>
        <p className="text-lg md:text-xl text-text-secondary">
          Premium websites delivered in days
        </p>
      </motion.div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center z-10 px-6"
      >
        <p className="font-mono text-xs tracking-wider text-text-tertiary uppercase">
          Fast · Professional · Reliable
        </p>
      </motion.div>

      {/* Gradient Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-brand/5 blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/5 blur-[120px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </motion.div>
  );
}
