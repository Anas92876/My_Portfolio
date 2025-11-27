import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      features: ['Real-time inventory', 'Payment integration', 'Admin panel', 'SEO optimized'],
      liveUrl: '#',
      githubUrl: '#',
      image: '🛒'
    },
    {
      title: 'IoT Smart Home Dashboard',
      description: 'Web dashboard for controlling and monitoring IoT devices with real-time data visualization and automation rules.',
      tech: ['React', 'Python', 'MQTT', 'WebSocket'],
      features: ['Device control', 'Real-time monitoring', 'Automation rules', 'Data analytics'],
      liveUrl: '#',
      githubUrl: '#',
      image: '🏠'
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with task tracking, team communication, and progress analytics.',
      tech: ['Next.js', 'Express', 'MongoDB', 'Socket.io'],
      features: ['Task management', 'Real-time collaboration', 'Analytics', 'Team chat'],
      liveUrl: '#',
      githubUrl: '#',
      image: '📊'
    },
    {
      title: 'Automation API Service',
      description: 'RESTful API service for business automation, integrating multiple third-party services and workflow automation.',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      features: ['API integrations', 'Workflow automation', 'Rate limiting', 'Error handling'],
      liveUrl: '#',
      githubUrl: '#',
      image: '⚙️'
    },
    {
      title: 'Portfolio Builder SaaS',
      description: 'SaaS platform enabling users to create and deploy professional portfolios with drag-and-drop builder.',
      tech: ['Next.js', 'Supabase', 'Tailwind', 'Vercel'],
      features: ['Drag-and-drop builder', 'Custom domains', 'Analytics', 'Templates'],
      liveUrl: '#',
      githubUrl: '#',
      image: '🎨'
    },
    {
      title: 'Robotics Competition Robot',
      description: 'Award-winning autonomous robot with computer vision, path planning, and obstacle avoidance capabilities.',
      tech: ['Python', 'ROS', 'OpenCV', 'Arduino'],
      features: ['Computer vision', 'Autonomous navigation', 'Sensor fusion', 'Competition winner'],
      liveUrl: '#',
      githubUrl: '#',
      image: '🤖'
    }
  ]

  return (
    <Section id="projects" background="white">
      <SectionTitle
        title="Featured Projects"
        subtitle="A showcase of my recent work and technical achievements"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.title} delay={index * 100}>
            <Card className="h-full">
              <div className="p-6 h-full flex flex-col">
                {/* Project Icon/Image */}
                <div className="w-full h-32 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-6xl">{project.image}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4 flex-1">
                  <p className="text-sm font-semibold text-neutral-700 mb-2">Key Features:</p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-neutral-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-neutral-300 text-neutral-700 rounded-lg hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  )
}
