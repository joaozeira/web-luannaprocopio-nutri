import { FormData } from "@/schemas/formSchema"

export type StepType = "text" | "number" | "textarea" | "radio"

export interface StepOption {
  value: string
  label: string
}

export interface FormStep {
  id: string
  type: StepType
  field: keyof FormData
  question: string | ((data: Partial<FormData>) => string)
  placeholder?: string
  options?: StepOption[]
  multiple?: boolean // Se true, permite seleção múltipla (precisa clicar em OK), se false, avança automaticamente
}

export const steps: FormStep[] = [
  {
    id: "nome",
    type: "text",
    field: "nome",
    question: "Qual é o seu nome?",
  },
  {
    id: "idade",
    type: "number",
    field: "idade",
    question: (data) => `${data.nome || ""}, qual a sua idade?`,
  },
  {
    id: "whatsapp",
    type: "text",
    field: "whatsapp",
    question: (data) => `${data.nome || ""}, qual o seu número de WhatsApp?`,
  },
  {
    id: "objetivo",
    type: "radio",
    field: "objetivo",
    question: (data) =>
      `${data.nome || ""}, qual é o seu principal objetivo com a nutrição hoje?`,
    options: [
      { value: "Emagrecimento", label: "Emagrecimento" },
      { value: "Ganho de massa muscular", label: "Ganho de massa muscular" },
      { value: "Reeducação alimentar", label: "Reeducação alimentar" },
      { value: "Melhorar saúde e exames", label: "Melhorar saúde e exames" },
      {
        value: "Organização da rotina alimentar",
        label: "Organização da rotina alimentar",
      },
      { value: "Outros", label: "Outros" },
    ],
  },
  {
    id: "acompanhamentoAnterior",
    type: "radio",
    field: "acompanhamentoAnterior",
    question: (data) =>
      `${data.nome || ""}, você já fez acompanhamento com nutricionista antes?`,
    options: [
      { value: "Sim, faço atualmente", label: "Sim, faço atualmente" },
      { value: "Sim, já fiz no passado", label: "Sim, já fiz no passado" },
      {
        value: "Não, será minha primeira vez",
        label: "Não, será minha primeira vez",
      },
    ],
  },
  {
    id: "tipoAtendimento",
    type: "radio",
    field: "tipoAtendimento",
    question: (data) =>
      `${data.nome || ""}, como você prefere o atendimento?`,
    options: [
      { value: "Online", label: "Online" },
      { value: "Presencial", label: "Presencial" },
      { value: "Tanto faz", label: "Tanto faz" },
    ],
  },
  {
    id: "quandoComecar",
    type: "radio",
    field: "quandoComecar",
    question: (data) =>
      `${data.nome || ""}, em quanto tempo você gostaria de começar o acompanhamento?`,
    options: [
      { value: "O quanto antes", label: "O quanto antes" },
      { value: "Dentro de 1 mês", label: "Dentro de 1 mês" },
      { value: "Dentro de 2 a 3 meses", label: "Dentro de 2 a 3 meses" },
      {
        value: "Apenas quero receber informações",
        label: "Apenas quero receber informações",
      },
    ],
  },
  {
    id: "dificuldade",
    type: "textarea",
    field: "dificuldade",
    question: (data) =>
      `${data.nome || ""}, qual é hoje sua maior dificuldade com a alimentação?`,
    placeholder:
      "Falta de tempo, ansiedade, compulsão alimentar, dificuldade em manter rotina.",
  },
]
