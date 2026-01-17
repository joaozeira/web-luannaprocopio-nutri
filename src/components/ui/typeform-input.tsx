"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TypeformInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const TypeformInput = React.forwardRef<HTMLInputElement, TypeformInputProps>(
  ({ className, type, hasError, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "w-full bg-transparent border-0 border-b-2 px-0 py-2 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-0 transition-all duration-200",
            type === "number" && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
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
TypeformInput.displayName = "TypeformInput"

export { TypeformInput }
