import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@fontsource-variable/zalando-sans";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luanna Procópio - Nutricionista",
  description: "Links importantes e lista de espera para acompanhamento nutricional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
