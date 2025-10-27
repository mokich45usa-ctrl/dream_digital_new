"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface FAQProps {
  onGetStarted?: () => void;
}

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="border-b-2 border-border last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-text-primary pr-8">
          {question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 border-2 border-border flex items-center justify-center group-hover:border-accent-dark transition-colors">
          {isOpen ? (
            <Minus className="w-4 h-4 text-text-primary" strokeWidth={3} />
          ) : (
            <Plus className="w-4 h-4 text-text-primary" strokeWidth={3} />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <div className="text-text-secondary leading-relaxed space-y-3 whitespace-pre-line">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ onGetStarted }: FAQProps) {
  const faqs = [
    {
      question: "How does the process work?",
      answer: `It's simple and fast.
You start by answering a few questions with our AI assistant, Dreamy.
We'll then send you a clear proposal — including the scope, price, and delivery time.
Once you approve and pay securely via Stripe, you'll receive several design options the same day.
From there, we deliver your finished website exactly on schedule.`
    },
    {
      question: "How do I know this is safe to pay?",
      answer: `All payments are processed through Stripe, one of the most trusted payment systems in the U.S.
We're based in California and operate transparently — no hidden fees, no shady deals.`
    },
    {
      question: "How long will it take to get my website?",
      answer: `It depends on your package:
• Starter — within 24 hours
• Professional — within 3–5 days
• Premium — within 7–10 days
We start immediately after confirming your payment.`
    },
    {
      question: "Will I get to choose the design?",
      answer: `Absolutely.
Before we begin building, we'll send you up to 5 unique design concepts for your website.
You can select your favorite, and we'll tailor it to your brand.`
    },
    {
      question: "What if I don't like the result?",
      answer: `We include revisions in every package.
You'll have a chance to refine your design until you're happy with it — before the final delivery.`
    },
    {
      question: "Do you offer refunds?",
      answer: `We don't provide refunds once the work has started, because every project requires real design and development time.
But we guarantee completion according to your proposal — and we keep refining the work until it matches what we promised.`
    },
    {
      question: "Can I edit my website later?",
      answer: `Yes!
You'll get easy-to-use tools to update text, images, and pages anytime.
And if you prefer, our team can handle updates for you under a maintenance plan.`
    },
    {
      question: "Do I need any technical knowledge?",
      answer: `Not at all.
You just describe your business — we take care of everything from concept to live website.`
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface cv-auto cis-1000">
      <div className="max-w-[900px] mx-auto px-4 lg:px-8">
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(q => ({
              "@type": "Question",
              name: q.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: q.answer.replace(/\n/g, '<br/>')
              }
            }))
          })}
        </script>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 border border-border bg-elevated mb-6">
            <span className="font-mono text-xs tracking-wider uppercase text-text-secondary">
              FAQ
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-6">
            Common questions
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to know about our service. Still deciding? Check <a href="#packages" className="underline">pricing packages</a> and <a href="#work" className="underline">portfolio</a>.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-elevated border-2 border-border p-8 lg:p-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-6">
            Still have questions?
          </p>
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
        </motion.div>
      </div>
    </section>
  );
}
