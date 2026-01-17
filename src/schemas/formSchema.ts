import { z } from "zod"

export const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  idade: z
    .number("Idade deve ser um número")
    .int("Idade deve ser um número inteiro")
    .positive("Idade deve ser um número positivo")
    .refine((val) => val > 0, { message: "Idade é obrigatória" }),
  whatsapp: z.string().min(1, "WhatsApp é obrigatório"),
  objetivo: z.string().min(1, "Objetivo é obrigatório"),
  acompanhamentoAnterior: z.string().min(1, "Campo obrigatório"),
  tipoAtendimento: z.string().min(1, "Tipo de atendimento é obrigatório"),
  quandoComecar: z.string().min(1, "Campo obrigatório"),
  dificuldade: z.string().min(1, "Campo obrigatório"),
})

export type FormData = z.infer<typeof formSchema>
