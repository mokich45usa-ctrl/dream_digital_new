"use client"

import { motion } from 'motion/react'
import { Sparkles, Zap, Shield } from 'lucide-react'

const benefits = [
  {
    icon: <Sparkles className="w-6 h-6" strokeWidth={2} />,
    title: 'Professional Design',
    description: 'Modern, clean layouts that make your business look trustworthy and established.'
  },
  {
    icon: <Zap className="w-6 h-6" strokeWidth={2} />,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures your site loads instantly on any device.'
  },
  {
    icon: <Shield className="w-6 h-6" strokeWidth={2} />,
    title: 'SEO Ready',
    description: 'Built-in optimization helps customers find you on Google from day one.'
  },
]

export function ProfessionalWebsites() {
  return (
    <section className="py-20 lg:py-32 bg-bg cv-auto cis-900">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Professional websites that work as hard as you do
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Every site we build is designed to attract customers, build trust, and drive results. See our <a href="#work" className="underline">recent portfolio</a> or explore <a href="#packages" className="underline">website pricing</a>.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="relative"
            >
              <div className="h-full p-8 bg-elevated border-2 border-border hover:border-accent-dark transition-all duration-200">
                <div className="mb-6 w-14 h-14 bg-accent-dark flex items-center justify-center">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 pt-16 border-t-2 border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-mono text-4xl font-black text-text-primary mb-2">100%</div>
              <p className="text-text-secondary">Mobile Responsive</p>
            </div>
            <div>
              <div className="font-mono text-4xl font-black text-text-primary mb-2">24/7</div>
              <p className="text-text-secondary">Available Online</p>
            </div>
            <div>
              <div className="font-mono text-4xl font-black text-text-primary mb-2">∞</div>
              <p className="text-text-secondary">Customer Reach</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}