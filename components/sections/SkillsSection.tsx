import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import Badge from '@/components/Badge'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Redux', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL', 'FastAPI']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Linux', 'Nginx']
    },
    {
      title: 'Automation & IoT',
      skills: ['Arduino', 'Raspberry Pi', 'Python Scripts', 'Zapier', 'API Integrations', 'Robotics']
    },
    {
      title: 'Other',
      skills: ['Agile', 'Testing', 'Performance Optimization', 'SEO', 'UI/UX Design', 'Technical Writing']
    }
  ]

  return (
    <Section id="skills" background="gray">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="A comprehensive toolkit for building modern digital solutions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <AnimateOnScroll key={category.title} delay={index * 100}>
            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 pb-3 border-b-2 border-primary-200 dark:border-primary-800">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 flex-1">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  )
}
