"use client"

import { useEffect } from "react"

export function FontPreloader() {
  useEffect(() => {
    // Adiciona preload das fontes o mais rápido possível
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // Verifica se os links já existem para evitar duplicação
      const existingBold = document.querySelector('link[href="/fonts/ravelle-bold.otf"]')
      const existingRegular = document.querySelector('link[href="/fonts/ravelle-regular.otf"]')
      
      if (!existingBold) {
        const preloadBold = document.createElement("link")
        preloadBold.rel = "preload"
        preloadBold.href = "/fonts/ravelle-bold.otf"
        preloadBold.as = "font"
        preloadBold.type = "font/otf"
        preloadBold.crossOrigin = "anonymous"
        preloadBold.setAttribute("fetchpriority", "high")
        // Adiciona no início do head para prioridade máxima
        const firstChild = document.head.firstChild
        if (firstChild) {
          document.head.insertBefore(preloadBold, firstChild)
        } else {
          document.head.appendChild(preloadBold)
        }
      }
      
      if (!existingRegular) {
        const preloadRegular = document.createElement("link")
        preloadRegular.rel = "preload"
        preloadRegular.href = "/fonts/ravelle-regular.otf"
        preloadRegular.as = "font"
        preloadRegular.type = "font/otf"
        preloadRegular.crossOrigin = "anonymous"
        const firstChild = document.head.firstChild
        if (firstChild) {
          document.head.insertBefore(preloadRegular, firstChild)
        } else {
          document.head.appendChild(preloadRegular)
        }
      }

      // Carrega a fonte Bold imediatamente e de forma agressiva
      const fontBold = new FontFace("Ravelle", "url(/fonts/ravelle-bold.otf)", {
        weight: "bold",
        display: "block"
      })
      
      // Inicia o carregamento imediatamente
      fontBold.load().then((loadedFont) => {
        document.fonts.add(loadedFont)
      }).catch(() => {
        // Fallback silencioso
      })

      // Também carrega a Regular
      const fontRegular = new FontFace("Ravelle", "url(/fonts/ravelle-regular.otf)", {
        weight: "normal",
        display: "swap"
      })
      
      fontRegular.load().then((loadedFont) => {
        document.fonts.add(loadedFont)
      }).catch(() => {
        // Fallback silencioso
      })
    }
  }, [])

  return null
}
