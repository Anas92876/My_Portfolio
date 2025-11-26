import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function HeroSection() {

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-24 transition-colors duration-300"
    >
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 leading-tight">
              Full-Stack Developer &{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
                Automation Specialist
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building innovative web solutions, automation systems, and IoT applications.
              Transforming ideas into high-performance digital experiences.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/cv.pdf"
                download
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-lg shadow-primary-600/30 text-lg"
              >
                Download My CV
              </a>
              <Link
                href="/contact"
                className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus-visible:ring-primary-500 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Automation & IoT</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Robotics Solutions</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Scroll indicator - removed since we have multi-page now */}
        </div>
      </div>
    </section>
  )
}
