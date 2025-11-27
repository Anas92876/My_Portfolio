import AboutSection from '@/components/sections/AboutSection'

export const metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about my background, experience, and expertise in web development and automation.',
  openGraph: {
    title: 'About | Portfolio',
    description: 'Learn more about my background, experience, and expertise in web development and automation.',
  },
  twitter: {
    card: 'summary',
    title: 'About | Portfolio',
    description: 'Learn more about my background, experience, and expertise in web development and automation.',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      <AboutSection />
    </div>
  )
}
