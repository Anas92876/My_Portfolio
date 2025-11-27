import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeScript } from '@/components/ThemeScript'
import StructuredData from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Full-Stack Developer & Automation Specialist | Professional Portfolio',
    template: '%s | Professional Portfolio'
  },
  description: 'Professional portfolio of a Full-Stack Developer specializing in web development, automation, robotics, and IoT solutions. 5+ years experience building innovative applications with React, Next.js, Node.js, Python, and modern technologies. Available for freelance projects and full-time opportunities.',
  keywords: [
    // Primary Keywords
    'full-stack developer',
    'web developer',
    'software engineer',
    'automation specialist',

    // Technologies - Frontend
    'react developer',
    'next.js developer',
    'javascript developer',
    'typescript developer',
    'frontend developer',
    'tailwind css',

    // Technologies - Backend
    'node.js developer',
    'python developer',
    'backend developer',
    'api development',
    'rest api',
    'graphql',

    // Specializations
    'automation engineer',
    'iot developer',
    'robotics engineer',
    'web automation',
    'process automation',

    // Database & DevOps
    'database developer',
    'postgresql',
    'mongodb',
    'docker',
    'devops engineer',

    // Services
    'freelance developer',
    'remote developer',
    'web development services',
    'automation solutions',
    'custom software development',

    // Project Types
    'portfolio website',
    'web applications',
    'mobile responsive',
    'e-commerce development',
    'dashboard development',
  ],
  authors: [{ name: 'Professional Full-Stack Developer', url: 'https://yourportfolio.com' }],
  creator: 'Professional Full-Stack Developer',
  publisher: 'Professional Full-Stack Developer',
  metadataBase: new URL('https://yourportfolio.com'),
  alternates: {
    canonical: 'https://yourportfolio.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Full-Stack Developer & Automation Specialist | Professional Portfolio',
    description: 'Professional portfolio showcasing web development, automation, robotics, and IoT projects. 5+ years experience with modern technologies.',
    siteName: 'Professional Developer Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Full-Stack Developer & Automation Specialist',
    description: 'Professional portfolio showcasing web development, automation, and robotics projects.',
    creator: '@yourtwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
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
        <StructuredData />
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
