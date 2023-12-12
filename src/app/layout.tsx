import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { TopBar } from '@/components/TopBar'
import './globals.css'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Países do Mundo',
  description: 'Site que lista os países do mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} bg-slate-200`}>

        <header className='bg-white px-40'>
          <TopBar />
        </header>

        <main className='px-40'>
          {children}
        </main>

      </body>
    </html>
  )
}
