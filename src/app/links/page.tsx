"use client"

import { HeroSection } from "@/components/HeroSection"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Instagram } from "lucide-react"
import Link from "next/link"

export default function LinksPage() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "var(--color-beige-dark)" }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Links Grid Section */}
      <section
        id="links-section"
        className="w-full px-4 sm:px-6 lg:px-12 py-12"
        style={{ backgroundImage: "var(--gradient-section-background)", }}
      >
        <div className="max-w-7xl mx-auto mt-[-100px] relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Lista de Espera - ocupa toda a primeira linha */}
            <div className="col-span-2 lg:col-span-2 animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              <Link href="/links/lista-de-espera" className="block h-full">
                <Card
                  className="h-[140px] sm:h-[180px] cursor-pointer border-1"
                  style={{
                    borderColor: "var(--color-beige-dark)",
                    background: "var(--gradient-card-background)",
                  }}
                >
                  <CardContent className="p-4 sm:p-6 h-full">
                    <div className="flex items-center h-full">
                      <h3
                        className="text-2xl sm:text-[35px] font-regular text-left"
                        style={{ color: "var(--color-text-black)", fontFamily: "Ravelle, serif" }}
                      >
                        Lista de <br/> Espera
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* WhatsApp - segunda linha, primeira coluna */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card
                  className="h-[140px] sm:h-[180px] cursor-pointer border-1"
                  style={{
                    borderColor: "var(--color-beige-dark)",
                    background: "var(--gradient-card-background)",
                  }}
                >
                  <CardContent className="p-3 sm:p-6 h-full">
                    <div className="flex flex-col h-full">
                      <div className="h-full flex flex-col justify-between gap-2 sm:gap-3">
                        <div className="flex-shrink-0">
                          <svg className="w-8 h-8 sm:w-11 sm:h-11" style={{ fill: "var(--color-text-black)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M19.44 4.552A10.413 10.413 0 0 0 12.044 1.5C6.281 1.5 1.59 6.168 1.588 11.906a10.341 10.341 0 0 0 1.396 5.203L1.5 22.5l5.543-1.447a10.483 10.483 0 0 0 4.997 1.266h.004c5.762 0 10.453-4.669 10.456-10.407a10.32 10.32 0 0 0-3.06-7.36Zm-7.396 16.01h-.004a8.706 8.706 0 0 1-4.423-1.205l-.317-.188-3.29.859.879-3.192-.207-.328a8.6 8.6 0 0 1-1.329-4.602c0-4.768 3.9-8.648 8.694-8.648a8.672 8.672 0 0 1 8.688 8.655c-.002 4.769-3.9 8.65-8.69 8.65Zm4.767-6.477c-.261-.13-1.547-.76-1.785-.847-.238-.086-.414-.13-.588.13-.174.261-.675.845-.827 1.02-.153.176-.305.195-.566.065-.261-.13-1.104-.404-2.102-1.29-.776-.69-1.3-1.541-1.453-1.801-.152-.26-.016-.402.115-.531.117-.117.26-.304.392-.456.13-.152.174-.26.26-.434.087-.173.044-.325-.02-.455-.066-.13-.589-1.41-.806-1.93-.213-.508-.428-.439-.588-.447-.152-.007-.328-.01-.501-.01a.962.962 0 0 0-.697.326c-.24.26-.914.89-.914 2.17 0 1.278.937 2.516 1.067 2.69.129.173 1.842 2.799 4.463 3.925.486.209.984.392 1.49.548.625.198 1.195.17 1.645.103.502-.075 1.546-.63 1.764-1.237.217-.607.217-1.127.152-1.236-.065-.108-.24-.174-.501-.303Z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col text-left">
                          <span
                            className="text-xs sm:text-sm"
                            style={{ color: "var(--color-text-black)" }}
                          >
                            Contato por
                          </span>
                          <span
                            className="text-2xl sm:text-[35px] font-regular text-left"
                            style={{ color: "var(--color-text-black)", fontFamily: "Ravelle, serif" }}
                          >
                            WhatsApp
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Instagram - segunda linha, segunda coluna */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <a
                href="https://instagram.com/luannaprocopio"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card
                  className="h-[140px] sm:h-[180px] cursor-pointer border-1"
                  style={{
                    borderColor: "var(--color-beige-dark)",
                    background: "var(--gradient-card-background)",
                  }}
                >
                  <CardContent className="p-3 sm:p-6 h-full">
                    <div className="flex flex-col h-full">
                      <div className="h-full flex flex-col justify-between gap-2 sm:gap-3">
                        <div className="flex-shrink-0">
                          <svg className="w-8 h-8 sm:w-11 sm:h-11" style={{ fill: "var(--color-text-black)" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.375 3.25a4.388 4.388 0 0 1 4.375 4.375v8.75a4.388 4.388 0 0 1-4.375 4.375h-8.75a4.389 4.389 0 0 1-4.375-4.375v-8.75A4.388 4.388 0 0 1 7.625 3.25h8.75Zm0-1.75h-8.75C4.256 1.5 1.5 4.256 1.5 7.625v8.75c0 3.369 2.756 6.125 6.125 6.125h8.75c3.369 0 6.125-2.756 6.125-6.125v-8.75c0-3.369-2.756-6.125-6.125-6.125Z"></path>
                            <path d="M17.688 7.625a1.313 1.313 0 1 1 0-2.625 1.313 1.313 0 0 1 0 2.625Z"></path>
                            <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col text-left">
                          <span
                            className="text-xs sm:text-sm"
                            style={{ color: "var(--color-text-black)" }}
                          >
                            Acompanhe meu
                          </span>
                          <span
                            className="text-2xl sm:text-[35px] font-regular text-left"
                            style={{ color: "var(--color-text-black)", fontFamily: "Ravelle, serif" }}
                          >
                            Instagram
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-white mt-15 mb-0 animate-fadeIn opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Copyright © Luanna Procópio {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </section>

    </div>
  )
}
