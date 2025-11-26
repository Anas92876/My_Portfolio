import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function FeaturedOverview() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '95+', label: 'Lighthouse Score' },
    { number: '100%', label: 'Client Satisfaction' },
  ]

  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack solution with real-time features',
      tech: ['Next.js', 'Node.js', 'PostgreSQL'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'IoT Dashboard',
      description: 'Real-time device monitoring system',
      tech: ['React', 'Python', 'WebSocket'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Automation API',
      description: 'Business workflow automation service',
      tech: ['Node.js', 'Redis', 'Docker'],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <div className="py-20 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="container-custom">
        {/* Stats Section */}
        <AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Quick About */}
        <AnimateOnScroll delay={100}>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Building Digital Excellence
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
              I&apos;m a passionate full-stack developer specializing in creating high-performance
              web applications, automation systems, and IoT solutions. With a strong foundation
              in modern technologies and a commitment to excellence, I turn complex challenges
              into elegant solutions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all duration-200"
            >
              Learn more about me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Featured Projects Preview */}
        <div className="mb-12">
          <AnimateOnScroll delay={200}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                Featured Projects
              </h2>
              <Link
                href="/projects"
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline hidden md:block"
              >
                View all projects →
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <AnimateOnScroll key={index} delay={300 + index * 100}>
                <div className="group relative bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-primary-500/10 hover:border-transparent dark:hover:border-primary-500/30 transition-all duration-300">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-medium border border-transparent dark:border-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={600}>
            <div className="text-center mt-8 md:hidden">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium"
              >
                View all projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Call to Action */}
        <AnimateOnScroll delay={700}>
          <div className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to help bring your ideas to life with
              cutting-edge technology and expert development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-medium hover:shadow-2xl transition-all duration-200 hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="bg-primary-700 text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-800 transition-all duration-200"
              >
                View My Work
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
