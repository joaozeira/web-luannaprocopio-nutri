"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {

  const scrollToLinks = () => {
    const linksSection = document.getElementById("links-section")
    linksSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full min-h-screen lg:h-[900px] flex flex-col items-center justify-end lg:justify-center px-4 sm:px-6 lg:px-12 py-12 relative overflow-hidden" style={{ background: "var(--gradient-hero-background)" }}>
      {/* Background Image - Desktop */}
      <Image
        src="/background-link.jpg"
        alt="Background"
        fill
        className="hidden lg:block object-cover object-center"
        priority
      />
      
      {/* Background Image - Mobile */}
      <Image
        src="/background-link-mobile.jpg"
        alt="Background"
        fill
        className="block lg:hidden object-cover object-center"
        priority
      />
      
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-end lg:justify-between relative z-10 pb-12 lg:pb-0">
        {/* Left Side - Text Content */}
        <div className="flex-1 lg:mb-0 lg:pr-8 max-w-2xl w-full">
          {/* Main Heading */}
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-left animate-fadeIn" 
            style={{ 
              color: "var(--color-text-primary)", 
              fontWeight: 500,
              animationDelay: "0.2s",
              animationFillMode: "both"
            }}
          >
            Muito Prazer, sou a{" "}
            <span 
              className="font-medium"
              style={{
                backgroundImage: "var(--gradient-hero-text)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Dra. Luanna Procópio
            </span>
          </h2>

          {/* Description */}
          <p 
            className="text-base sm:text-lg mb-8 leading-relaxed text-left animate-fadeIn" 
            style={{ 
              color: "var(--color-text-primary)",
              animationDelay: "0.6s",
              animationFillMode: "both"
            }}
          >
            Nutricionista especialista em emagrecimento e hipertrofia, ofereço atendimento personalizado para orientar você na construção de uma alimentação saudável, prazerosa e alinhada às suas necessidades e objetivos.
          </p>

          {/* Scroll Indicator */}
          <div 
            className="group flex items-center gap-3 animate-fadeIn cursor-pointer"
            onClick={scrollToLinks}
            style={{
              animationDelay: "0.8s",
              animationFillMode: "both"
            }}
          >
            <button
              onClick={scrollToLinks}
              className="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden"
              style={{ 
                background: "var(--gradient-hero-button)",
              }}
            >
              {/* Efeito de brilho no botão */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <ChevronDown 
                className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-y-1 animate-bounce-slow" 
                style={{ color: "var(--color-text-light)" }} 
              />
            </button>
            <div className="flex flex-col text-left">
              <span 
                className="text-sm font-medium transition-all duration-300 group-hover:translate-x-1" 
                style={{ color: "var(--color-text-primary)" }}
              >
                Deslize para baixo e
              </span>
              <span 
                className="text-sm font-medium transition-all duration-300 group-hover:translate-x-1" 
                style={{ color: "var(--color-text-primary)" }}
              >
                descubra links uteis
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
