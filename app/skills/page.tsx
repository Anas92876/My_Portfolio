import SkillsSection from '@/components/sections/SkillsSection'

export const metadata = {
  title: 'Skills | Portfolio',
  description: 'Explore my technical skills and expertise across frontend, backend, DevOps, and automation technologies.',
}

export default function SkillsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <SkillsSection />
    </div>
  )
}
