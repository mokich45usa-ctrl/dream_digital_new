import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { cn } from "./utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "start 0.2"],
  });
  
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <p
        className="flex flex-wrap"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
          lineHeight: 1.7,
          color: 'var(--text-primary)',
          fontWeight: 400,
        }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <span className="relative mr-2 mt-1">
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-text-primary"
      >
        {children}
      </motion.span>
    </span>
  );
};
