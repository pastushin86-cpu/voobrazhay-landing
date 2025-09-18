"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type AccordionType = "single" | "multiple";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AccordionType;
  collapsible?: boolean;
}

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: AccordionType;
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export function Accordion({ 
  className, 
  type = "single", 
  collapsible = true, 
  ...props 
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggleItem = React.useCallback((value: string) => {
    setOpenItems(prev => {
      if (type === "single") {
        if (prev.includes(value)) {
          return collapsible ? [] : prev;
        }
        return [value];
      } else {
        if (prev.includes(value)) {
          return prev.filter(item => item !== value);
        }
        return [...prev, value];
      }
    });
  }, [type, collapsible]);

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type, collapsible }}>
      <div className={cn("space-y-2", className)} {...props} />
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({ className, value, ...props }: AccordionItemProps) {
  return <div className={cn("rounded-lg border", className)} {...props} />;
}

export function AccordionTrigger({ 
  className, 
  children, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const isOpen = context.openItems.includes(props.value || "");
  
  return (
    <button
      className={cn(
        "w-full text-left px-4 py-3 font-medium flex items-center justify-between hover:bg-gray-50 transition-colors",
        className
      )}
      onClick={() => props.value && context.toggleItem(props.value)}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown 
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} 
      />
    </button>
  );
}

export function AccordionContent({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");

  const isOpen = context.openItems.includes(props.value || "");

  return (
    <div 
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("px-4 pb-4 text-sm text-gray-700", className)}>
        {children}
      </div>
    </div>
  );
}


