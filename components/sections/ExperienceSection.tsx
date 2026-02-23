'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import MagicBento from '@/components/MagicBento'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      /* ── Timeline items ── */
      const timelineItems = timelineRef.current?.querySelectorAll<HTMLElement>('.timeline-item')
      const timelineDots  = timelineRef.current?.querySelectorAll<HTMLElement>('.timeline-dot')

      if (timelineItems?.length) gsap.set(timelineItems, { x: -60, opacity: 0 })
      if (timelineDots?.length)  gsap.set(timelineDots,  { scale: 0, opacity: 0 })

      timelineItems?.forEach((item) => {
        const dot = item.querySelector<HTMLElement>('.timeline-dot')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        })

        // Dot pops in first with a hard bounce
        if (dot) {
          tl.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: 'back.out(3)',
          })
        }

        // Card slides in from the left, overlapping dot animation
        tl.to(
          item,
          { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          dot ? '-=0.2' : 0
        )
      })

      /* ── Achievement cards ── */
      const achieveCards = achievementsRef.current?.querySelectorAll<HTMLElement>('.achievement-card')

      if (achieveCards?.length) {
        gsap.set(achieveCards, { y: 50, opacity: 0, scale: 0.93 })
      }

      achieveCards?.forEach((card, i) => {
        const isLeft  = i % 2 === 0
        const icon = card.querySelector<HTMLElement>('.achievement-icon')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 87%',
            toggleActions: 'play none none none',
          },
          delay: (i % 2) * 0.09,
        })

        // Card rises with a slight directional lean
        tl.fromTo(
          card,
          {
            x: isLeft ? -30 : 30,
            y: 50,
            opacity: 0,
            scale: 0.93,
            rotation: isLeft ? -1.5 : 1.5,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.65,
            ease: 'power3.out',
          }
        )

        // Icon pops in after card arrives
        if (icon) {
          tl.fromTo(
            icon,
            { scale: 0, rotation: -20 },
            { scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(2.5)' },
            '-=0.25'
          )
        }
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <Section id="experience" background="gray">
      <SectionTitle
        title="Experience & Achievements"
        subtitle="My professional journey and notable accomplishments"
      />

      <div className="max-w-5xl mx-auto">

        {/* ── Professional Experience Timeline ── */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center">
            Professional Experience
          </h3>

          <div className="space-y-8" ref={timelineRef}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item relative pl-8 md:pl-12 border-l-2 border-primary-300 dark:border-primary-700"
              >
                {/* Animated dot */}
                <div className="timeline-dot absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full shadow-md shadow-primary-600/40" />

                <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {exp.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-2 md:mt-0 md:bg-neutral-100 md:dark:bg-neutral-700 md:px-3 md:py-1 md:rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Notable Achievements Grid ── */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center">
            Notable Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={achievementsRef}>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="achievement-icon text-5xl mb-3 inline-block">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Certifications ── */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center">
            Certifications & Credentials
          </h3>
          <AnimateOnScroll>
            <MagicBento
              glowColor="14, 165, 233"
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={true}
              clickEffect={true}
              particleCount={10}
              spotlightRadius={320}
              cards={[
                {
                  label: 'Cloud Architecture · 2023',
                  title: 'AWS Certified Solutions Architect',
                  description: 'Amazon Web Services',
                  date: '2023',
                  credential: 'ABC123456',
                  verifyUrl: '#',
                  gradFrom: '#f97316',
                  gradTo: '#f59e0b',
                  skills: ['EC2 & S3 Design', 'VPC & IAM Security', 'High Availability'],
                },
                {
                  label: 'Cloud Platform · 2023',
                  title: 'Google Cloud Professional',
                  description: 'Google Cloud',
                  date: '2023',
                  credential: 'GCP123456',
                  verifyUrl: '#',
                  gradFrom: '#0ea5e9',
                  gradTo: '#06b6d4',
                  skills: ['BigQuery Analytics', 'GKE Clusters', 'Cloud Run'],
                },
                {
                  label: 'Frontend Development · 2023',
                  title: 'Meta Front-End Developer',
                  description: 'Meta (Facebook)',
                  date: '2023',
                  credential: 'META123456',
                  verifyUrl: '#',
                  gradFrom: '#3b82f6',
                  gradTo: '#6366f1',
                  skills: ['React.js', 'JavaScript ES6+', 'Responsive Design'],
                },
                {
                  label: 'Agile & Scrum · 2022',
                  title: 'Professional Scrum Master I',
                  description: 'Scrum.org',
                  date: '2022',
                  credential: 'PSM123456',
                  verifyUrl: '#',
                  gradFrom: '#0ea5e9',
                  gradTo: '#0284c7',
                  skills: ['Sprint Planning', 'Backlog Refinement', 'Team Facilitation'],
                },
                {
                  label: 'Database · 2022',
                  title: 'MongoDB Certified Developer',
                  description: 'MongoDB University',
                  date: '2022',
                  credential: 'MDB123456',
                  verifyUrl: '#',
                  gradFrom: '#10b981',
                  gradTo: '#059669',
                  skills: ['Aggregation Pipeline', 'Atlas Cloud', 'Indexing Strategies'],
                },
                {
                  label: 'DevOps · 2023',
                  title: 'Certified Kubernetes Administrator',
                  description: 'Cloud Native Computing Foundation',
                  date: '2023',
                  credential: 'CKA123456',
                  verifyUrl: '#',
                  gradFrom: '#8b5cf6',
                  gradTo: '#6366f1',
                  skills: ['Pod Scheduling', 'RBAC & Security', 'Cluster Setup'],
                },
              ]}
            />
          </AnimateOnScroll>
        </div>

      </div>
    </Section>
  )
}
