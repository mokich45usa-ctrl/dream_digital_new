"use client"

import { motion } from 'motion/react'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import { useState } from 'react'
import bigRevealImg from '../../my materials/steps/4_step.webp'

interface BigRevealProps {
  onGetStarted?: () => void
}

export function BigReveal({ onGetStarted }: BigRevealProps) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section className="relative py-20 lg:py-32 bg-surface">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative border-2 border-border overflow-hidden ar-4-3 bg-surface">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-danger/10 to-warning/10">
                  <div className="text-center p-8">
                    <AlertTriangle className="w-16 h-16 text-warning mx-auto mb-4" />
                    <p className="text-text-secondary">Business Growth Visualization</p>
                  </div>
                </div>
              ) : (
                <img
                  src={bigRevealImg}
                  alt="Business growth visualization"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  sizes="(max-width: 768px) 100vw, 540px"
                />
              )}
            </div>
            
            {/* Stat Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -top-4 -left-4 bg-danger border-2 border-border px-4 py-3"
            >
              <div className="flex flex-col items-center text-center">
                <div className="font-mono text-3xl font-black text-white leading-none mb-2">
                  −80%
                </div>
                <div className="text-xs font-semibold text-white uppercase">
                  leads lost
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-warning border-2 border-border px-4 py-3"
            >
              <div className="flex flex-col items-center text-center">
                <div className="font-mono text-3xl font-black text-white leading-none mb-2">
                  8×
                </div>
                <div className="text-xs font-semibold text-white uppercase">
                  harder
                </div>
              </div>
            </motion.div>
            
            {/* Removed duplicate left-side Get Started button as requested */}
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-warning/10 border border-warning">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <span className="font-mono text-xs tracking-wider uppercase text-warning font-bold">
                  Reality Check
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black leading-tight text-text-primary uppercase tracking-tight">
                We're going to let you in on{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">something big</span>
                  <div className="absolute bottom-1 left-0 right-0 h-3 bg-danger/20" />
                </span>
                …
              </h2>
              
              <div className="space-y-6 text-lg text-text-secondary border-l-4 border-danger pl-6">
                <p className="leading-relaxed">
                  Without a professional website, you're{' '}
                  <span className="font-bold text-text-primary">losing 80% of potential leads</span>
                  {' '}before they even contact you.
                </p>
                
                <p className="leading-relaxed">
                  Competitors with websites convert{' '}
                  <span className="font-bold text-text-primary">8× more customers</span>
                  {' '}than businesses without one.
                </p>
                
                <p className="leading-relaxed">
                  Every day without a website = money left on the table.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                data-cta="get-started"
                onClick={onGetStarted}
                className="fancy-black"
              >
                <span className="text">Get Started</span>
                <span className="top-key"></span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}