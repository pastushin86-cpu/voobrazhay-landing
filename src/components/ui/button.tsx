"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "default" | "outline";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-black text-white hover:bg-black/90 focus-visible:ring-black/20",
  outline: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-300",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, size = "md", variant = "default", children, ...props }, ref) => {
    if (asChild) {
      return (
        <button
          ref={ref}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-md font-medium",
            sizeClasses[size],
            variantClasses[variant],
            "shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2",
            className
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium",
          sizeClasses[size],
          variantClasses[variant],
          "shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";


