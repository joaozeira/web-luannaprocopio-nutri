import { FormData } from "@/schemas/formSchema"

const STORAGE_KEY = "lista-espera-form-data"
const STEP_KEY = "lista-espera-current-step"

export function saveFormData(data: Partial<FormData>) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error("Erro ao salvar dados no localStorage:", error)
  }
}

export function loadFormData(): Partial<FormData> | null {
  if (typeof window === "undefined") return null
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error("Erro ao carregar dados do localStorage:", error)
    return null
  }
}

export function saveCurrentStep(stepIndex: number) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STEP_KEY, String(stepIndex))
  } catch (error) {
    console.error("Erro ao salvar step no localStorage:", error)
  }
}

export function loadCurrentStep(): number {
  if (typeof window === "undefined") return 0
  try {
    const step = localStorage.getItem(STEP_KEY)
    return step ? parseInt(step, 10) : 0
  } catch (error) {
    console.error("Erro ao carregar step do localStorage:", error)
    return 0
  }
}

export function clearFormData() {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(STEP_KEY)
  } catch (error) {
    console.error("Erro ao limpar dados do localStorage:", error)
  }
}
