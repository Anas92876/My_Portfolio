import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      period: '2021 - Present',
      description: 'Leading development of scalable web applications and automation systems. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Built and deployed 15+ production applications',
        'Improved application performance by 60%',
        'Led team of 5 developers'
      ]
    },
    {
      title: 'Automation Engineer',
      company: 'Innovation Labs',
      period: '2019 - 2021',
      description: 'Developed IoT solutions and automation systems for industrial applications. Integrated multiple third-party APIs and services.',
      achievements: [
        'Automated 50+ business processes',
        'Reduced manual work by 70%',
        'Implemented real-time monitoring systems'
      ]
    },
    {
      title: 'Robotics Trainer',
      company: 'Education Center',
      period: '2018 - 2019',
      description: 'Taught robotics, programming, and automation to students. Prepared teams for national competitions.',
      achievements: [
        'Trained 100+ students',
        'Led teams to competition victories',
        'Developed curriculum and training materials'
      ]
    }
  ]

  const achievements = [
    {
      icon: '🏆',
      title: 'Robotics Competition Winner',
      description: 'First place in National Robotics Championship'
    },
    {
      icon: '🎓',
      title: 'Technical Trainer',
      description: 'Trained 100+ developers in modern web technologies'
    },
    {
      icon: '🚀',
      title: 'Open Source Contributor',
      description: 'Active contributor to popular open-source projects'
    },
    {
      icon: '💡',
      title: 'Innovation Award',
      description: 'Recognized for innovative automation solutions'
    }
  ]

  return (
    <Section id="experience" background="gray">
      <SectionTitle
        title="Experience & Achievements"
        subtitle="My professional journey and notable accomplishments"
      />

      <div className="max-w-5xl mx-auto">
        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="relative pl-8 md:pl-12 border-l-2 border-primary-300 dark:border-primary-700">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full"></div>

                  <div className="bg-white dark:bg-[#1a1a1a] border border-neutral-100 dark:border-neutral-800 p-6 rounded-xl shadow-md dark:shadow-neutral-900/30 hover:shadow-lg dark:hover:shadow-primary-500/10 transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                          {exp.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center">Notable Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-neutral-100 dark:border-neutral-800 p-6 rounded-xl shadow-md dark:shadow-neutral-900/30 hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300 text-center">
                  <div className="text-5xl mb-3">{achievement.icon}</div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {achievement.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center">Certifications & Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'AWS Certified Solutions Architect',
                issuer: 'Amazon Web Services',
                date: '2023',
                credential: 'ABC123456',
                verifyUrl: '#',
                color: 'from-orange-500 to-orange-600'
              },
              {
                name: 'Professional Scrum Master I',
                issuer: 'Scrum.org',
                date: '2022',
                credential: 'PSM123456',
                verifyUrl: '#',
                color: 'from-blue-500 to-blue-600'
              },
              {
                name: 'Meta Front-End Developer',
                issuer: 'Meta (Facebook)',
                date: '2023',
                credential: 'META123456',
                verifyUrl: '#',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                name: 'Google Cloud Professional',
                issuer: 'Google Cloud',
                date: '2023',
                credential: 'GCP123456',
                verifyUrl: '#',
                color: 'from-red-500 to-yellow-500'
              },
              {
                name: 'MongoDB Certified Developer',
                issuer: 'MongoDB University',
                date: '2022',
                credential: 'MDB123456',
                verifyUrl: '#',
                color: 'from-green-600 to-green-700'
              },
              {
                name: 'Certified Kubernetes Admin',
                issuer: 'Cloud Native Computing',
                date: '2023',
                credential: 'CKA123456',
                verifyUrl: '#',
                color: 'from-blue-700 to-purple-700'
              },
            ].map((cert, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="group relative bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md dark:shadow-neutral-900/30 hover:shadow-2xl dark:hover:shadow-primary-500/10 transition-all duration-500 border border-neutral-100 dark:border-neutral-800 hover:border-transparent dark:hover:border-primary-500/30">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

                  <div className="p-6">
                    {/* Certificate Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>

                    {/* Certificate Info */}
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2 leading-tight">
                      {cert.name}
                    </h4>

                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-1 font-medium">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                      Issued: {cert.date}
                    </p>

                    {/* Credential ID */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 rounded-lg px-3 py-2 mb-4">
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Credential ID</p>
                      <p className="text-sm font-mono text-neutral-700 dark:text-neutral-300 font-medium">
                        {cert.credential}
                      </p>
                    </div>

                    {/* Verify Button */}
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center bg-gradient-to-r ${cert.color} text-white px-4 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-sm group-hover:scale-105`}
                    >
                      Verify Certificate →
                    </a>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 border border-green-200 dark:border-green-700">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
