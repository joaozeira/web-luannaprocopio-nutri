"use client"

import { ArrowRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepNavigationProps {
  currentStep: number
  totalSteps: number
  onPrevious: () => void
  onNext: () => void
  isNextDisabled: boolean
  isSubmitting?: boolean
}

export function StepNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isNextDisabled,
  isSubmitting = false,
}: StepNavigationProps) {
  const isLastStep = currentStep === totalSteps - 1

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isNextDisabled && !isSubmitting) {
      onNext()
    }
  }

  return (
    <>
      {/* Botão mobile - fixed bottom, full width */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-form-background border-t border-gray-200 sm:hidden z-50 shadow-lg">
        <div className="flex items-center gap-3 w-full">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onPrevious()
              }}
              disabled={isSubmitting}
              className={cn(
                "flex-shrink-0 px-4 py-4 rounded-xl font-semibold text-form-text border-2 border-form-item-border",
                "transition-all duration-200 flex items-center justify-center",
                isSubmitting
                  ? "bg-gray-200 cursor-not-allowed"
                  : "cursor-pointer active:scale-95 hover:opacity-80"
              )}
              style={
                !isSubmitting
                  ? {
                      backgroundColor: "var(--form-background)",
                    }
                  : undefined
              }
              aria-label="Voltar"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          ) : (
            <div className="flex-shrink-0 w-0" />
          )}
          <button
            type="button"
            onClick={onNext}
            disabled={isNextDisabled || isSubmitting}
            onKeyDown={handleKeyPress}
            className={cn(
              "flex-1 px-6 py-4 rounded-xl font-semibold uppercase",
              "transition-all duration-200",
              isNextDisabled || isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "cursor-pointer active:scale-95 text-white"
            )}
            style={
              !isNextDisabled && !isSubmitting
                ? {
                    background: "var(--gradient-button-mobile)",
                  }
                : undefined
            }
          >
            {isSubmitting ? "Enviando..." : isLastStep ? "Enviar" : "OK"}
          </button>
        </div>
      </div>

      {/* Botão desktop */}
      <div className="hidden sm:flex items-center gap-3 mt-8">
        {currentStep > 0 && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onPrevious()
            }}
            disabled={isSubmitting}
            className={cn(
              "px-6 py-4 rounded-2xl font-semibold text-form-text uppercase border-2 border-form-item-border",
              "transition-all duration-200",
              isSubmitting
                ? "bg-gray-200 cursor-not-allowed"
                : "cursor-pointer hover:scale-105 active:scale-100 hover:opacity-80"
            )}
            style={
              !isSubmitting
                ? {
                    backgroundColor: "var(--form-background)",
                  }
                : undefined
            }
          >
            Voltar
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          disabled={isNextDisabled || isSubmitting}
          onKeyDown={handleKeyPress}
          className={cn(
            "px-8 py-4 rounded-2xl font-semibold uppercase",
            "transition-all duration-200",
            isNextDisabled || isSubmitting
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "cursor-pointer hover:scale-105 active:scale-100 text-white"
          )}
          style={
            !isNextDisabled && !isSubmitting
              ? {
                  background: "var(--gradient-button-desktop)",
                }
              : undefined
          }
        >
          {isSubmitting ? "Enviando..." : isLastStep ? "Enviar" : "OK"}
        </button>
        {currentStep === 0 && (
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>carrega em Enter</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </>
  )
}
