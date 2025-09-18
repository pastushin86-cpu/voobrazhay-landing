"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AccordionType = "single" | "multiple";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AccordionType;
  collapsible?: boolean;
}

export function Accordion({ className, ...props }: AccordionProps) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return <div className={cn("rounded-lg border", className)} {...props} />;
}

export function AccordionTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "w-full text-left px-4 py-3 font-medium flex items-center justify-between",
        className
      )}
      {...props}
    />
  );
}

export function AccordionContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-4 pb-4 text-sm text-gray-700", className)} {...props} />;
}


