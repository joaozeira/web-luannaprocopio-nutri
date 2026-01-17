"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface WhatsAppInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  hasError?: boolean
}

const WhatsAppInput = React.forwardRef<HTMLInputElement, WhatsAppInputProps>(
  ({ className, hasError, value, onChange, ...props }, ref) => {
    const formatPhone = (val: string) => {
      // Remove tudo que não é número
      const numbers = val.replace(/\D/g, "")
      
      // Formata como (XX) XXXXX-XXXX
      if (numbers.length <= 2) {
        return numbers
      } else if (numbers.length <= 7) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
      } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhone(e.target.value)
      if (onChange) {
        // Cria um evento sintético com o valor formatado
        const syntheticEvent = {
          ...e,
          target: { ...e.target, value: formatted },
          currentTarget: { ...e.currentTarget, value: formatted },
        } as React.ChangeEvent<HTMLInputElement>
        onChange(syntheticEvent)
      }
    }

    return (
      <div className="w-full">
        {/* Input */}
        <input
          type="text"
          className={cn(
            "w-full bg-transparent border-0 border-b-2 px-0 py-2 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-0 transition-all duration-200",
            hasError 
              ? "border-red-500 focus:border-red-600" 
              : "border-form-border focus:border-form-border focus:shadow-sm",
            className
          )}
          value={value || ""}
          onChange={handleChange}
          placeholder="(11) 96123-4567"
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
WhatsAppInput.displayName = "WhatsAppInput"

export { WhatsAppInput }
