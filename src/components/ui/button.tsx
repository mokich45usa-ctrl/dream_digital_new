import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { Loader2 } from "lucide-react";

import { cn } from "./utils";

const buttonVariants = cva(
  // Base styles - All buttons
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium whitespace-nowrap",
    "transition-all outline-none",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    // Focus visible ring
    "focus-visible:ring-4 focus-visible:ring-brand/20 focus-visible:outline-none",
    // Animation curve and duration
    "duration-[var(--btn-transition-duration)] ease-[var(--btn-transition-timing)]",
  ],
  {
    variants: {
      variant: {
        // PRIMARY - Brand gradient background
        primary: [
          "bg-brand-gradient text-brand-contrast",
          "shadow-[var(--btn-shadow-brand)]",
          "hover:shadow-[var(--btn-shadow-brand-hover)]",
          "hover:translate-y-[var(--btn-hover-lift)]",
          "active:translate-y-[var(--btn-active-press)] active:shadow-[var(--btn-shadow-default)]",
          "disabled:bg-surface disabled:text-text-secondary disabled:shadow-none",
          "disabled:hover:translate-y-0",
        ],
        
        // SECONDARY - Subtle background with border
        secondary: [
          "bg-surface text-text-primary border-2 border-border",
          "shadow-[var(--btn-shadow-default)]",
          "hover:bg-white hover:border-brand/30 hover:shadow-[var(--btn-shadow-hover)]",
          "hover:translate-y-[var(--btn-hover-lift)]",
          "active:translate-y-[var(--btn-active-press)] active:shadow-[var(--btn-shadow-default)]",
          "disabled:bg-surface disabled:text-text-secondary disabled:border-border",
          "disabled:hover:translate-y-0 disabled:hover:bg-surface",
        ],
        
        // GHOST - Transparent with hover background
        ghost: [
          "bg-transparent text-text-primary",
          "hover:bg-brand-8 hover:text-brand",
          "hover:translate-y-[var(--btn-hover-lift)]",
          "active:translate-y-[var(--btn-active-press)] active:bg-brand-16",
          "disabled:text-text-secondary",
          "disabled:hover:translate-y-0 disabled:hover:bg-transparent",
        ],
        
        // LINK - Text only with underline
        link: [
          "bg-transparent text-brand underline-offset-4",
          "hover:underline hover:text-brand-gradient-end",
          "active:text-brand-gradient-start",
          "disabled:text-text-secondary disabled:no-underline",
        ],
      },
      size: {
        sm: [
          "h-[var(--btn-height-sm)]",
          "px-[var(--btn-padding-x-sm)]",
          "text-[length:var(--btn-font-size-sm)]",
          "rounded-[var(--btn-radius-sm)]",
          "gap-1.5",
        ],
        md: [
          "h-[var(--btn-height-md)]",
          "px-[var(--btn-padding-x-md)]",
          "text-[length:var(--btn-font-size-md)]",
          "rounded-[var(--btn-radius-md)]",
          "gap-2",
        ],
        lg: [
          "h-[var(--btn-height-lg)]",
          "px-[var(--btn-padding-x-lg)]",
          "text-[length:var(--btn-font-size-lg)]",
          "rounded-[var(--btn-radius-lg)]",
          "gap-2.5",
        ],
        icon: [
          "size-[var(--btn-height-md)]",
          "rounded-[var(--btn-radius-md)]",
          "p-0",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="size-4 animate-spin" />
        )}
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
