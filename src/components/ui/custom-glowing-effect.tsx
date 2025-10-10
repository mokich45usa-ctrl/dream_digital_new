"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "./utils";
import { animate } from "motion/react";

interface CustomGlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
  colors?: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

const CustomGlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = false,
    colors = {
      primary: '#8b5cf6',
      secondary: '#ef4444', 
      tertiary: '#8b5cf6'
    }
  }: CustomGlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + proximity + width &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    // Generate custom gradient with provided colors
    const customGradient = `radial-gradient(circle, ${colors.primary} 30%, ${colors.primary}00 60%),
      radial-gradient(circle at 40% 40%, ${colors.secondary} 25%, ${colors.secondary}00 55%),
      radial-gradient(circle at 60% 60%, ${colors.tertiary} 30%, ${colors.tertiary}00 60%), 
      radial-gradient(circle at 40% 60%, ${colors.primary} 30%, ${colors.primary}00 60%),
      repeating-conic-gradient(
        from 236.84deg at 50% 50%,
        ${colors.primary} 0%,
        ${colors.secondary} calc(25% / var(--repeating-conic-gradient-times)),
        ${colors.tertiary} calc(50% / var(--repeating-conic-gradient-times)), 
        ${colors.primary} calc(75% / var(--repeating-conic-gradient-times)),
        ${colors.primary} calc(100% / var(--repeating-conic-gradient-times))
      )`;

    // Generate custom shadow with provided colors
    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    };

    const customShadow = `0 0 50px ${hexToRgba(colors.primary, 1)}, 0 0 100px ${hexToRgba(colors.secondary, 0.8)}, 0 0 150px ${hexToRgba(colors.tertiary, 0.6)}, 0 0 200px ${hexToRgba(colors.primary, 0.4)}`;

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient": customGradient,
              "--glow-shadow": customShadow,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow-custom",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[calc(var(--active)*4)] after:transition-opacity after:duration-50",
              "after:filter after:brightness-150 after:saturate-150",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
            style={{
              "--glow-shadow": customShadow,
            } as React.CSSProperties}
          />
        </div>
        
        <style dangerouslySetInnerHTML={{
          __html: `
            .glow-custom::after {
              box-shadow: ${customShadow} !important;
            }
          `
        }} />
      </>
    );
  }
);

CustomGlowingEffect.displayName = "CustomGlowingEffect";

export { CustomGlowingEffect };