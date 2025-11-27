import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeScript } from '@/components/ThemeScript'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio | Full-Stack Developer & Automation Specialist',
  description: 'Portfolio of a Full-Stack Developer specializing in web development, automation, robotics, and IoT solutions. Expert in modern web technologies and innovative digital solutions.',
  keywords: ['web developer', 'full-stack developer', 'automation', 'robotics', 'IoT', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  metadataBase: new URL('https://yourportfolio.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Portfolio | Full-Stack Developer & Automation Specialist',
    description: 'Portfolio showcasing web development, automation, and robotics projects.',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Portfolio | Full-Stack Developer',
    description: 'Portfolio showcasing web development, automation, and robotics projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body suppressHydrationWarning className="bg-white dark:bg-[#0f0f0f] text-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
