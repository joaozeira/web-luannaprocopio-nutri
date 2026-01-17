"use client"

import { ReactNode } from "react"

interface StepContainerProps {
  children: ReactNode
}

export function StepContainer({ children }: StepContainerProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-form-background">
      <div className="w-full max-w-3xl">{children}</div>
    </div>
  )
}
