import ExperienceSection from '@/components/sections/ExperienceSection'

export const metadata = {
  title: 'Experience | Portfolio',
  description: 'My professional experience, achievements, and career highlights in software development.',
  openGraph: {
    title: 'Experience | Portfolio',
    description: 'My professional experience, achievements, and career highlights in software development.',
  },
  twitter: {
    card: 'summary',
    title: 'Experience | Portfolio',
    description: 'My professional experience, achievements, and career highlights in software development.',
  },
}

export default function ExperiencePage() {
  return (
    <div className="pt-24 md:pt-28">
      <ExperienceSection />
    </div>
  )
}
