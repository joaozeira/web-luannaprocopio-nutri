"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema, FormData } from "@/schemas/formSchema"
import { steps } from "@/lib/steps"
import {
  saveFormData,
  loadFormData,
  saveCurrentStep,
  loadCurrentStep,
  clearFormData,
} from "@/lib/storage"
import { submitFormData } from "@/lib/submit"
import { StepContainer } from "@/components/StepContainer"
import { StepNavigation } from "@/components/StepNavigation"
import { FormStepRenderer } from "@/components/FormStepRenderer"

export default function ListaEsperaPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      nome: "",
      idade: 0,
      whatsapp: "",
      objetivo: "",
      acompanhamentoAnterior: "",
      tipoAtendimento: "",
      quandoComecar: "",
      dificuldade: "",
    },
  })

  const formValues = watch()

  // Carregar dados salvos do localStorage
  useEffect(() => {
    const savedData = loadFormData()
    const savedStep = loadCurrentStep()

    if (savedData) {
      Object.keys(savedData).forEach((key) => {
        const field = key as keyof FormData
        if (savedData[field] !== undefined) {
          setValue(field, savedData[field] as any)
        }
      })
    }

    if (savedStep > 0 && savedStep < steps.length) {
      setCurrentStepIndex(savedStep)
    }
  }, [setValue])

  // Salvar dados a cada mudança
  useEffect(() => {
    const subscription = watch((data) => {
      saveFormData(data as Partial<FormData>)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  // Salvar step atual
  useEffect(() => {
    saveCurrentStep(currentStepIndex)
  }, [currentStepIndex])

  const currentStep = steps[currentStepIndex]
  const currentQuestion =
    typeof currentStep.question === "function"
      ? currentStep.question(formValues)
      : currentStep.question

  const currentValue = formValues[currentStep.field]

  const handleNext = async () => {
    // Para multiple select, verifica se pelo menos um item foi selecionado
    let fieldValid = await trigger(currentStep.field)
    
    // Validação adicional para multiple select
    if (currentStep.type === "radio" && currentStep.multiple) {
      const hasSelection = Array.isArray(currentValue) && currentValue.length > 0
      fieldValid = fieldValid && hasSelection
    }
    
    if (fieldValid && currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1)
    } else if (fieldValid && currentStepIndex === steps.length - 1) {
      // Último step - enviar formulário
      handleSubmit(onSubmit)()
    }
  }

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1)
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await submitFormData(data as any) // Permitir arrays temporariamente
      clearFormData()
      setSubmitSuccess(true)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Erro ao enviar formulário. Tente novamente.")
      setIsSubmitting(false)
    }
  }

  const handleValueChange = (value: any) => {
    setValue(currentStep.field, value, { shouldValidate: true })
  }

  const handleRadioItemSelect = async (value: any) => {
    // Avança automaticamente para o próximo step quando um item é selecionado (single select)
    const fieldValid = await trigger(currentStep.field)
    if (fieldValid && currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1)
    } else if (fieldValid && currentStepIndex === steps.length - 1) {
      // Último step - enviar formulário
      handleSubmit(onSubmit)()
    }
  }

  // Verificar se o campo atual é válido
  const isCurrentFieldValid = 
    !errors[currentStep.field] && 
    currentValue !== "" && 
    currentValue !== undefined &&
    (currentStep.type !== "number" || (typeof currentValue === "number" && currentValue > 0 && !isNaN(currentValue))) &&
    (currentStep.type !== "radio" || currentStep.multiple || currentValue !== "") &&
    (currentStep.type !== "radio" || !currentStep.multiple || (Array.isArray(currentValue) && currentValue.length > 0))

  // Handler para tecla Enter
  useEffect(() => {
    const handleKeyPress = async (e: KeyboardEvent) => {
      if (e.key === "Enter" && isCurrentFieldValid && !isSubmitting) {
        e.preventDefault()
        const fieldValid = await trigger(currentStep.field)
        
        if (fieldValid && currentStepIndex < steps.length - 1) {
          setCurrentStepIndex((prev) => prev + 1)
        } else if (fieldValid && currentStepIndex === steps.length - 1) {
          handleSubmit(onSubmit)()
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isCurrentFieldValid, isSubmitting, currentStepIndex, currentStep, trigger, handleSubmit, onSubmit])

  if (submitSuccess) {
    return (
      <StepContainer>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Formulário enviado com sucesso!</h2>
          <p className="text-muted-foreground">
            Obrigada por se cadastrar. Entrarei em contato em breve!
          </p>
        </div>
      </StepContainer>
    )
  }

  const progressPercentage = ((currentStepIndex + 1) / steps.length) * 100

  return (
    <StepContainer>
      {/* Barra de progresso no topo */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-form-progress transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="w-full relative">
        {/* Indicador de step no topo esquerdo */}
        <div className="absolute top-4 left-0 text-sm sm:text-base md:text-lg font-medium text-gray-600">
          {currentStepIndex + 1}→
        </div>

        {/* Conteúdo centralizado */}
        <div className="max-w-2xl mx-auto pt-12 pb-24 sm:pb-24 pb-28">
          {/* Pergunta */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight mb-4 sm:mb-6 md:mb-8 text-form-text">
              {currentQuestion}
            </h2>

            {/* Campo do formulário */}
            <div className="mb-4">
              <FormStepRenderer
                step={currentStep}
                register={register}
                errors={errors}
                value={currentValue}
                onChange={handleValueChange}
                onItemSelect={
                  currentStep.type === "radio" && !currentStep.multiple
                    ? handleRadioItemSelect
                    : undefined
                }
              />
            </div>

            {/* Mensagem de erro */}
            {errors[currentStep.field] && (
              <p className="text-sm text-red-500 mt-2">
                {errors[currentStep.field]?.message as string}
              </p>
            )}
          </div>

          {/* Navegação */}
          <StepNavigation
            currentStep={currentStepIndex}
            totalSteps={steps.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            isNextDisabled={!isCurrentFieldValid}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </StepContainer>
  )
}
