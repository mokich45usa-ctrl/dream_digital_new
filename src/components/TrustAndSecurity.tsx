"use client"

import { motion } from 'motion/react'
import { Lock, Shield, CreditCard, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface TrustAndSecurityProps {
  onGetStarted?: () => void
}

export function TrustAndSecurity({ onGetStarted }: TrustAndSecurityProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-bg">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative border-2 border-border overflow-hidden">
              <ImageWithFallback
                src="https://lh3.googleusercontent.com/d/1O3qIyWRU9X_NuTLiLL7TF3Vy2sGJmwnw"
                alt="Modern website on laptop screen"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -top-4 -left-4 bg-elevated border-2 border-border p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-text-primary uppercase">
                    Secured
                  </div>
                  <div className="text-xs text-text-secondary">
                    SSL Protected
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-elevated border-2 border-border p-3"
            >
              <Lock className="w-6 h-6 text-brand" strokeWidth={2.5} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-elevated border-2 border-border p-4"
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-xs text-text-secondary mb-1">
                    Powered by
                  </div>
                  <svg
                    width="45"
                    height="18.75"
                    viewBox="0 0 60 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Stripe"
                  >
                    <path
                      d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
                      fill="#6772E5"
                    />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-[#6772E5] flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight text-text-primary">
                We make it{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">easy, secure,</span>
                  <div className="absolute bottom-1 left-0 right-0 h-3 bg-brand/20" />
                </span>
                {' '}and{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">transparent</span>
                  <div className="absolute bottom-1 left-0 right-0 h-3 bg-accent-gold/20" />
                </span>
                .
              </h2>
              
              <div className="space-y-4 text-lg text-text-secondary">
                <p>
                  Get your website built by{' '}
                  <span className="font-semibold text-text-primary">professionals</span>
                  {' '}— fast, clear, and worry-free.
                </p>
                <p>
                  Every payment is protected with{' '}
                  <span className="font-semibold text-text-primary">Stripe Secure Checkout</span>
                  {' '}and backed by clear pricing before we start.
                </p>
              </div>
            </div>
            
            <button
              onClick={onGetStarted}
              className="fancy-black"
            >
              <span className="text">Get Started</span>
              <span className="top-key"></span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
