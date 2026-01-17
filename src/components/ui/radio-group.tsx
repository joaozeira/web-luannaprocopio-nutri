import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn("grid gap-2 sm:gap-3", className)} {...props} ref={ref} />
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string
    checked?: boolean
  }
>(({ className, value, checked, ...props }, ref) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        checked && "bg-primary",
        className
      )}
      {...props}
    />
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

interface RadioItemProps {
  value: string
  label: string
  checked: boolean
  onSelect: (value: string) => void
  letter?: string
}

const RadioItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & RadioItemProps
>(({ className, value, label, checked, onSelect, letter, ...props }, ref) => {
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    if (checked) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [checked])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onSelect(value)
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center space-x-3 sm:space-x-4 rounded-xl sm:rounded-2xl border-2 p-3 sm:p-5 cursor-pointer transition-all duration-150 relative",
        "hover:scale-[1.005]",
        checked 
          ? "border-form-item-border" 
          : "border-form-item-border hover:border-form-item-border",
        isAnimating && "animate-[pulse_0.3s_ease-in-out]",
        className
      )}
      style={{
        background: checked
          ? "var(--gradient-radio-checked)"
          : "var(--gradient-radio-unchecked)",
      }}
      onClick={handleClick}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 text-xs sm:text-sm font-bold transition-all duration-150 relative z-10 pointer-events-none",
          isAnimating && checked && "animate-[scaleUp_0.3s_ease-out]"
        )}
        style={{
          background: checked
            ? "var(--gradient-radio-circle)"
            : "transparent",
          color: checked ? "var(--color-text-white)" : "var(--color-gold-darkest)",
          borderColor: checked ? "var(--color-gold-medium)" : "var(--color-gold-darkest)",
        }}
      >
        {letter || "○"}
      </div>
      <label
        className="text-sm sm:text-base font-medium cursor-pointer flex-1 relative z-10 pointer-events-none"
        style={{
          color: "var(--color-text-dark)",
        }}
      >
        {label}
      </label>
      {checked && (
        <Check 
          className={cn(
            "w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 relative z-10 pointer-events-none"
          )}
          style={{
            color: "var(--color-gold-medium)",
          }}
        />
      )}
    </div>
  )
})
RadioItem.displayName = "RadioItem"

export { RadioGroup, RadioGroupItem, RadioItem }
