import { FormData } from "@/schemas/formSchema"

export interface SubmitPayload extends FormData {
  submittedAt: string
}

export async function submitFormData(data: FormData): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error("NEXT_PUBLIC_N8N_WEBHOOK_URL não configurada")
  }

  // Converter arrays para strings (separadas por vírgula) se necessário
  const normalizedData: any = { ...data }
  Object.keys(normalizedData).forEach((key) => {
    if (Array.isArray(normalizedData[key])) {
      normalizedData[key] = normalizedData[key].join(", ")
    }
  })

  const payload: SubmitPayload = {
    ...normalizedData,
    submittedAt: new Date().toISOString(),
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Erro ao enviar formulário: ${response.statusText}`)
  }
}
