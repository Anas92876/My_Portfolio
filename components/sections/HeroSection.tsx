'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
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
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 1 + i * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const gradientTextVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-24 transition-colors duration-300 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(90deg, #0284c7 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            y: y1
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-40 h-40 bg-primary-400/10 dark:bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[20%] w-28 h-28 bg-primary-600/10 dark:bg-primary-300/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient circles */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-64 h-64 bg-gradient-to-br from-primary-500/5 to-transparent rounded-full"
          style={{ y: y2 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="container-custom py-12 relative z-10"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title with enhanced animation */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 leading-tight"
              variants={titleVariants}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Full-Stack Developer &{' '}
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span
                className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent inline-block relative"
                variants={gradientTextVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Automation Specialist
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Description with enhanced animation */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Building innovative web solutions, automation systems, and IoT applications.
            </motion.span>{' '}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Transforming ideas into high-performance digital experiences.
            </motion.span>
          </motion.p>

          {/* Buttons with enhanced animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="/cv.pdf"
              download
              className="relative bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transform transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-lg shadow-primary-600/30 text-lg overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Download My CV</span>
            </motion.a>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <Link
                href="/contact"
                className="inline-block relative border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus-visible:ring-primary-500 px-8 py-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 text-lg overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-primary-600/10 dark:bg-primary-400/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get in Touch</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features with enhanced animation */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400"
            variants={itemVariants}
          >
            {['Web Development', 'Automation & IoT', 'Robotics Solutions'].map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-neutral-900/30 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800"
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  borderColor: 'rgb(14 165 233)',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Hologram Effect */}
          <motion.div
            className="relative mt-16 mx-auto max-w-md"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* Hologram Container */}
            <motion.div
              className="relative perspective-1000"
              animate={{
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Main Hologram Card */}
              <motion.div
                className="relative bg-gradient-to-br from-primary-500/10 via-primary-400/5 to-transparent dark:from-primary-400/20 dark:via-primary-500/10 dark:to-transparent backdrop-blur-md border border-primary-400/30 dark:border-primary-300/30 rounded-2xl p-8 overflow-hidden shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(14, 165, 233, 0.3)',
                    '0 0 40px rgba(14, 165, 233, 0.5)',
                    '0 0 20px rgba(14, 165, 233, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Scanning lines */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-400/20 to-transparent"
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Glitch effect */}
                <motion.div
                  className="absolute inset-0 bg-primary-500/10"
                  animate={{
                    opacity: [0, 0.5, 0],
                    x: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Floating Tech Icon */}
                  <motion.div
                    className="mx-auto w-20 h-20 mb-4 relative"
                    animate={{
                      y: [0, -10, 0],
                      rotateZ: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Holographic Text */}
                  <motion.div
                    className="text-center"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(14, 165, 233, 0.5)',
                        '0 0 20px rgba(14, 165, 233, 0.8)',
                        '0 0 10px rgba(14, 165, 233, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent mb-2">
                      Tech Innovator
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-300">
                      Crafting the future with code
                    </p>
                  </motion.div>

                  {/* Orbiting Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [
                          Math.cos((i * Math.PI * 2) / 6) * 80,
                          Math.cos((i * Math.PI * 2) / 6 + Math.PI) * 80,
                          Math.cos((i * Math.PI * 2) / 6) * 80,
                        ],
                        y: [
                          Math.sin((i * Math.PI * 2) / 6) * 80,
                          Math.sin((i * Math.PI * 2) / 6 + Math.PI) * 80,
                          Math.sin((i * Math.PI * 2) / 6) * 80,
                        ],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}

                  {/* Data Stream Effect */}
                  <motion.div
                    className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Corner accents */}
                {[
                  { top: 0, left: 0, rotate: 0 },
                  { top: 0, right: 0, rotate: 90 },
                  { bottom: 0, right: 0, rotate: 180 },
                  { bottom: 0, left: 0, rotate: 270 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4"
                    style={{ ...pos }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <div
                      className="w-full h-full border-t-2 border-l-2 border-primary-400"
                      style={{ transform: `rotate(${pos.rotate}deg)` }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Outer glow rings */}
              <motion.div
                className="absolute inset-0 border-2 border-primary-400/20 rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border border-primary-500/30 rounded-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
