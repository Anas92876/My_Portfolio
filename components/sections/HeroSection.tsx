'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-24 pb-16 transition-colors duration-300 overflow-hidden"
    >
      {/* Animated background elements - lightweight and smooth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-400/10 dark:bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary-300/8 dark:bg-primary-600/8 rounded-full blur-3xl"
          animate={{
            y: [0, 35, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />

        {/* Gradient moving circles */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/5 to-transparent rounded-full blur-2xl"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear" as const,
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" as const,
            },
          }}
        />

        {/* Additional subtle orbs */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-primary-600/8 dark:bg-primary-300/8 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      <div className="container-custom py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title - No animations */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 leading-tight">
            Full-Stack Developer &{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent">
              Automation Specialist
            </span>
          </h1>

          {/* Description - No animations */}
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Building innovative web solutions, automation systems, and IoT applications.
            Transforming ideas into high-performance digital experiences.
          </p>

          {/* Buttons - Simple hover effects only */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/cv.pdf"
              download
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg shadow-primary-600/30 text-lg hover:bg-primary-700 hover:scale-105 transition-all duration-200"
            >
              Download My CV
            </a>
            <Link
              href="/contact"
              className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-105 transition-all duration-200 text-lg"
            >
              Get in Touch
            </Link>
          </div>

          {/* Feature tags - No animations */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['Web Development', 'Automation & IoT', 'Robotics Solutions'].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-primary-500 hover:scale-105 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
