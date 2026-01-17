"use client"

import { UseFormRegister, FieldErrors } from "react-hook-form"
import { FormData } from "@/schemas/formSchema"
import { FormStep } from "@/lib/steps"
import { TypeformInput } from "@/components/ui/typeform-input"
import { TypeformTextarea } from "@/components/ui/typeform-textarea"
import { WhatsAppInput } from "@/components/ui/whatsapp-input"
import { RadioGroup, RadioItem } from "@/components/ui/radio-group"

interface FormStepRendererProps {
  step: FormStep
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
  value: any
  onChange: (value: any) => void
  onItemSelect?: (value: string) => void
}

export function FormStepRenderer({
  step,
  register,
  errors,
  value,
  onChange,
  onItemSelect,
}: FormStepRendererProps) {
  const hasError = !!errors[step.field]
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]

  switch (step.type) {
    case "text":
      // Campo WhatsApp tem tratamento especial
      if (step.field === "whatsapp") {
        return (
          <WhatsAppInput
            {...register(step.field)}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={step.placeholder || "(11) 96123-4567"}
            hasError={hasError}
            autoFocus
          />
        )
      }
      
      return (
        <TypeformInput
          {...register(step.field)}
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={step.placeholder || "Responde aqui..."}
          hasError={hasError}
          autoFocus
        />
      )

    case "number":
      return (
        <TypeformInput
          {...register(step.field, { 
            valueAsNumber: true,
            setValueAs: (v) => (v === "" ? 0 : parseInt(v, 10) || 0)
          })}
          type="number"
          value={value === 0 ? "" : value ?? ""}
          onChange={(e) => {
            const val = e.target.value
            if (val === "") {
              onChange(0)
            } else {
              const numValue = parseInt(val, 10)
              if (!isNaN(numValue)) {
                onChange(numValue)
              }
            }
          }}
          placeholder={step.placeholder || "Responde aqui..."}
          hasError={hasError}
          autoFocus
        />
      )

    case "textarea":
      return (
        <TypeformTextarea
          {...register(step.field)}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={step.placeholder || "Responde aqui..."}
          hasError={hasError}
          rows={4}
          autoFocus
        />
      )

    case "radio":
      const isMultiple = step.multiple === true
      const handleSelect = (val: string) => {
        if (isMultiple) {
          // Multiple select: toggle no array (não avança automaticamente)
          const currentValues = Array.isArray(value) ? value : []
          const newValues = currentValues.includes(val)
            ? currentValues.filter((v: string) => v !== val)
            : [...currentValues, val]
          onChange(newValues)
        } else {
          // Single select: apenas um valor e avança automaticamente
          onChange(val)
          // Chama callback para avançar automaticamente após um delay
          if (onItemSelect) {
            setTimeout(() => {
              onItemSelect(val)
            }, 300) // Delay para mostrar animação de seleção
          }
        }
      }

      const isChecked = (optionValue: string) => {
        if (isMultiple) {
          return Array.isArray(value) && value.includes(optionValue)
        }
        return value === optionValue
      }

      return (
        <RadioGroup className="w-full space-y-3">
          {step.options?.map((option, index) => (
            <RadioItem
              key={option.value}
              value={option.value}
              label={option.label}
              checked={isChecked(option.value)}
              onSelect={handleSelect}
              letter={letters[index]}
            />
          ))}
        </RadioGroup>
      )

    default:
      return null
  }
}
