import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Pokefy",
  description: "A Pokemon-powered Spotify clone",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`bg-[#121212] text-white antialiased flex h-screen ${geistSans.variable} ${geistMono.variable}`}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div>
            <Header />
          </div>
          <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 from-opacity-70 to-[#121212]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
