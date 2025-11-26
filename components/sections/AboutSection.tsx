import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function AboutSection() {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '5+ Years Experience',
      description: 'Building web applications and automation systems'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance Focused',
      description: 'Optimized solutions with 95+ Lighthouse scores'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Full-Stack Expertise',
      description: 'Frontend, backend, databases, and DevOps'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation Driven',
      description: 'Robotics competitions winner and tech trainer'
    }
  ]

  return (
    <Section id="about" background="white">
      <SectionTitle
        title="About Me"
        subtitle="Passionate about creating technology that makes a difference"
      />

      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-[#1a1a1a] border border-primary-100 dark:border-primary-800/30 p-8 md:p-12 rounded-2xl shadow-lg dark:shadow-neutral-900/30 mb-12">
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              Hi! I&apos;m a <strong className="text-primary-600 dark:text-primary-400">Full-Stack Developer</strong> with
              a passion for building efficient, scalable web applications and automation solutions.
              My journey started in robotics and IoT, which gave me a unique perspective on
              problem-solving and system integration.
            </p>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Today, I specialize in creating high-performance web experiences using modern
              technologies like <strong className="text-primary-600 dark:text-primary-400">React, Next.js, Node.js</strong>,
              and various automation frameworks. My mission is to transform complex challenges
              into elegant, user-friendly solutions that drive real business value.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md dark:shadow-neutral-900/30 hover:shadow-lg dark:hover:shadow-primary-500/10 transition-shadow duration-300 border border-neutral-100 dark:border-neutral-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  )
}
