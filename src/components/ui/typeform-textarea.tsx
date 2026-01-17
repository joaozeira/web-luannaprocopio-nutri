"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TypeformTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

const TypeformTextarea = React.forwardRef<HTMLTextAreaElement, TypeformTextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            "w-full bg-transparent border-0 border-b-2 px-0 py-2 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-0 resize-none transition-all duration-200",
            hasError 
              ? "border-red-500 focus:border-red-600" 
              : "border-form-border focus:border-form-border focus:shadow-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
TypeformTextarea.displayName = "TypeformTextarea"

export { TypeformTextarea }
