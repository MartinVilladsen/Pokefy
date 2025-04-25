import type { Metadata } from 'next'
import Head from 'next/head'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Header } from '../components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Pokéfy',
  description: 'A Pokémon-powered Spotify clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`bg-[#121212] text-white antialiased flex h-screen ${geistSans.variable} ${geistMono.variable}`}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-b from-[#1DB954] to-transparent">
            <Header />
          </div>
          <main className="flex-1 overflow-y-auto p-8 bg-[#121212]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
