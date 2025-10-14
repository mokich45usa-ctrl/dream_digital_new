"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  index: number;
}

function StatItem({ value, label, index }: StatItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  
  // Parse the number from the value string
  const parseValue = (val: string) => {
    const numMatch = val.match(/[\d.]+/);
    return numMatch ? parseFloat(numMatch[0]) : 0;
  };
  
  const numericValue = parseValue(value);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  // Extract prefix and suffix (like $ or % or + or h)
  const prefix = value.match(/^[^\d.]+/)?.[0] || '';
  const suffix = value.match(/[^\d.]+$/)?.[0] || '';

  useEffect(() => {
    if (inView) {
      const animation = animate(count, numericValue, {
        duration: 2,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      });
      return animation.stop;
    }
  }, [inView, numericValue, index, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="text-center"
    >
      <div className="mb-3">
        <span className="font-mono text-5xl lg:text-6xl font-black text-text-primary">
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </span>
      </div>
      <p className="text-base lg:text-lg text-text-secondary font-medium">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  const stats = [
    { value: "115+", label: "Websites Delivered" },
    { value: "48h", label: "Average Delivery" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "$250", label: "Starting Price" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface border-y-2 border-border">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}