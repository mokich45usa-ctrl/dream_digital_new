"use client"

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  Rocket 
} from "lucide-react";

interface ProcessCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ProcessCard({ number, icon, title, description, index }: ProcessCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -10% 0px",
    amount: 0.2 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="relative"
    >
      <div className="relative h-full p-8 bg-elevated border-2 border-border transition-all duration-200 hover:border-accent-dark">
        {/* Number Badge */}
        <div className="absolute top-8 right-8 w-12 h-12 bg-accent-dark flex items-center justify-center">
          <span className="font-mono text-lg font-bold text-white">{number}</span>
        </div>
        
        {/* Icon */}
        <div className="mb-6 w-14 h-14 bg-surface flex items-center justify-center">
          <div className="text-accent-dark">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function SimpleProcess() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { 
    once: true, 
    margin: "0px 0px -10% 0px",
    amount: 0.1 
  });

  const steps = [
    {
      number: "01",
      icon: <MessageSquare size={28} strokeWidth={2} />,
      title: "Chat with Dreamy",
      description: "Answer 5 quick questions about your business. Our AI assistant builds your perfect package instantly."
    },
    {
      number: "02",
      icon: <CheckCircle size={28} strokeWidth={2} />,
      title: "Get Your Offer",
      description: "Receive a clear, detailed proposal with pricing, timeline, and design options within minutes."
    },
    {
      number: "03",
      icon: <Sparkles size={28} strokeWidth={2} />,
      title: "We Build It",
      description: "Our team creates your professional website while you focus on your business. No meetings, no hassle."
    },
    {
      number: "04",
      icon: <Rocket size={28} strokeWidth={2} />,
      title: "Go Live",
      description: "Review, approve, and launch. Your website goes live within 24 hours, ready to attract customers."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-surface">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block px-4 py-2 border border-border bg-elevated mb-6">
            <span className="font-mono text-xs tracking-wider uppercase text-text-secondary">
              How It Works
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-6 max-w-2xl mx-auto leading-tight">
            From idea to launch in 4 simple steps
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            No complex forms. No endless meetings. Just a simple conversation that gets you results.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <ProcessCard
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}