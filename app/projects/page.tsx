import ProjectsSection from '@/components/sections/ProjectsSection'

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'View my portfolio of web development, automation, and IoT projects with live demos and source code.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <ProjectsSection />
    </div>
  )
}
