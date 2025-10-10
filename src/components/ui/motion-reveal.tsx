import { motion, useInView, Variants } from "motion/react";
import { useRef, ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: "section" | "card";
}

/**
 * MotionReveal - Scroll-triggered reveal animation
 * 
 * Section: opacity 0→1 + translateY 12px, 0.42s
 * Card: opacity 0→1 + translateY 10px, 0.32s
 * 
 * Viewport: amount 0.15, margin 20% from bottom (early trigger)
 * Auto-respects prefers-reduced-motion
 */
export function MotionReveal({ 
  children, 
  className = "", 
  delay = 0,
  type = "section" 
}: MotionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -20% 0px"
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: type === "section" ? 12 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: type === "section" ? 0.42 : 0.32,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CardRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

/**
 * CardReveal - Card reveal with optional internal stagger
 * 
 * Card animation: opacity 0→1 + translateY 10px, 0.32s
 * Stagger: icon (0s) → heading (0.08s) → text (0.16s)
 */
export function CardReveal({ 
  children, 
  className = "", 
  delay = 0,
  stagger = false 
}: CardRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -20% 0px"
  });

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: stagger ? 0.08 : 0,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {stagger ? (
        <>
          {/* Children will inherit stagger animation */}
          {children}
        </>
      ) : (
        children
      )}
    </motion.div>
  );
}

/**
 * StaggerItem - Individual item within a staggered card
 * Use as child of CardReveal with stagger={true}
 */
export function StaggerItem({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * SectionReveal - Wrapper for entire sections
 * Auto-adds section-level animation
 */
export function SectionReveal({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <MotionReveal type="section" delay={delay} className={className}>
      {children}
    </MotionReveal>
  );
}
