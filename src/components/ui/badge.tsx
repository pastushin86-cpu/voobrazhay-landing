import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const styles =
    variant === "outline"
      ? "border border-gray-200 text-gray-700 bg-white"
      : "bg-gray-900 text-white";
  return <span className={cn(base, styles, className)} {...props} />;
}


