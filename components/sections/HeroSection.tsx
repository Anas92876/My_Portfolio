'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Automation Specialist'

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-24 transition-colors duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 dark:bg-primary-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary-300/10 dark:bg-primary-600/5 rounded-full blur-3xl animate-float-slow" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-custom py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title with Animation */}
          <AnimateOnScroll>
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight animate-fade-in-up">
                Full-Stack Developer &{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                    {typedText}
                    <span className="animate-blink">|</span>
                  </span>
                  {/* Underline Effect */}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400 transform origin-left animate-expand-width" />
                </span>
              </h1>
            </div>
          </AnimateOnScroll>

          {/* Subtitle with stagger animation */}
          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Building innovative web solutions, automation systems, and IoT applications.
              <span className="block mt-2 font-semibold bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
                Transforming ideas into high-performance digital experiences.
              </span>
            </p>
          </AnimateOnScroll>

          {/* CTA Buttons with enhanced effects */}
          <AnimateOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <a
                href="/cv.pdf"
                download
                className="group relative bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-lg shadow-primary-600/30 hover:shadow-2xl hover:shadow-primary-600/50 text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download My CV
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>

              <Link
                href="/contact"
                className="group relative border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 dark:hover:border-primary-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 text-lg transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-primary-600/20 hover:shadow-2xl hover:shadow-primary-600/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in Touch
                </span>
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Feature Badges with enhanced styling */}
          <AnimateOnScroll delay={300}>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              {[
                { icon: '💻', text: 'Web Development', delay: '0ms' },
                { icon: '⚡', text: 'Automation & IoT', delay: '100ms' },
                { icon: '🤖', text: 'Robotics Solutions', delay: '200ms' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${700 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium text-neutral-700 dark:text-neutral-200">
                    {item.text}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Statistics or Metrics */}
          <AnimateOnScroll delay={400}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-neutral-800/50 dark:to-neutral-900/30 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 transform hover:scale-105"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="mx-auto w-6 h-10 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex justify-center p-2">
              <div className="w-1 h-3 rounded-full bg-primary-500 animate-scroll-indicator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
