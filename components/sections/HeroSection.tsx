'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.8 + i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const gradientTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="container-custom py-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Full-Stack Developer &{' '}
              <motion.span
                className="bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent inline-block"
                variants={gradientTextVariants}
                initial="hidden"
                animate="visible"
              >
                Automation Specialist
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Building innovative web solutions, automation systems, and IoT applications.
            Transforming ideas into high-performance digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="/cv.pdf"
              download
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transform transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-lg shadow-primary-600/30 text-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Download My CV
            </motion.a>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                href="/contact"
                className="inline-block border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus-visible:ring-primary-500 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 text-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400"
            variants={itemVariants}
          >
            {['Web Development', 'Automation & IoT', 'Robotics Solutions'].map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2"
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating elements for visual interest */}
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary-400/10 rounded-full blur-xl"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
