'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-24 pb-16 transition-colors duration-300 overflow-hidden"
    >
      {/* Animated background elements - lightweight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simple floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-400/10 dark:bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
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
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      <div className="container-custom py-12 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main content wrapper with subtle movement */}
          <motion.div
            className="text-center mb-12"
            variants={floatVariants}
            animate="animate"
          >
            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Full-Stack Developer &{' '}
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span
                className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Automation Specialist
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Building innovative web solutions, automation systems, and IoT applications.
              Transforming ideas into high-performance digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}
            >
              <motion.a
                href="/cv.pdf"
                download
                className="group relative bg-primary-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg shadow-primary-600/30 text-lg overflow-hidden"
                variants={buttonVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Download My CV</span>
                <motion.div
                  className="absolute inset-0 bg-primary-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-block border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 text-lg"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Feature tags */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              variants={itemVariants}
            >
              {['Web Development', 'Automation & IoT', 'Robotics Solutions'].map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    borderColor: 'rgb(14 165 233)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating code blocks decorative elements */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            variants={itemVariants}
          >
            {[
              { icon: '💻', title: 'Modern Stack', delay: 0 },
              { icon: '🚀', title: 'High Performance', delay: 0.1 },
              { icon: '⚡', title: 'Fast Delivery', delay: 0.2 },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + item.delay }}
              >
                <motion.div
                  className="bg-gradient-to-br from-white/80 to-white/40 dark:from-neutral-900/80 dark:to-neutral-900/40 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/10 transition-shadow duration-300"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                    {item.title}
                  </h3>
                  <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 rounded-full" />
                </motion.div>

                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 bg-primary-500/20 dark:bg-primary-400/20 rounded-2xl blur-xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats section with movement */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            variants={itemVariants}
          >
            {[
              { value: '5+', label: 'Years Exp.' },
              { value: '50+', label: 'Projects' },
              { value: '95+', label: 'Quality Score' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent mb-2"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear" as const,
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
