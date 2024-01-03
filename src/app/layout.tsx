import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/login/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alimentar - Login',
  description: 'Rede Social sobre alimentação saudável.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='h-lvh bg-lime-100'>
        <main className="container mx-auto min-h-screen grid grid-cols-2 grid-rows-[11fr_1fr]">
          {children}
        </main>
      </body>
    </html>
  )
}
