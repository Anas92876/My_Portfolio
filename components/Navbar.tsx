'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = observerTarget.current
    // Use IntersectionObserver instead of scroll events for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the top sentinel is not visible, we've scrolled down
        setIsScrolled(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '-1px 0px 0px 0px', // Trigger just after top
      }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Invisible sentinel element at the very top of the page */}
      <div ref={observerTarget} className="absolute top-0 left-0 w-full h-px pointer-events-none" aria-hidden="true" />

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'top-2'
            : 'top-0'
        } ${isMobileMenuOpen ? 'blur-sm opacity-50' : ''}`}
        style={{
          // Use transform for GPU acceleration
          willChange: isScrolled ? 'auto' : 'transform',
        }}
      >
        <nav className={`transition-all duration-500 ease-out ${
          isScrolled
            ? 'mx-4 md:mx-12 lg:mx-24 xl:mx-32 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md shadow-2xl dark:shadow-primary-500/10 rounded-full py-3 px-6 md:px-8 border border-neutral-200/50 dark:border-neutral-800'
            : 'bg-transparent py-5 px-4'
        }`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link
              href="/"
              className={`font-bold transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md px-2 ${
                isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
              }`}
              aria-label="Go to home"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className={`hidden md:flex items-center transition-all duration-500 ${
              isScrolled ? 'space-x-1 lg:space-x-2' : 'space-x-2 lg:space-x-3'
            }`}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-lg font-medium transition-all duration-300 text-neutral-700 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                      isScrolled ? 'px-3 py-2 text-sm lg:text-base' : 'px-4 py-2.5 text-base lg:text-lg'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle & CTA Button (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className={`bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-lg shadow-primary-600/30 ${
                  isScrolled ? 'px-5 py-2 text-sm lg:text-base' : 'px-6 py-2.5 text-base lg:text-lg'
                }`}
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-all duration-500 ${
                isScrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={`transition-all duration-500 mx-auto ${
                  isScrolled ? 'w-4 h-4' : 'w-6 h-6'
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-[#1a1a1a] shadow-2xl dark:shadow-primary-500/10 z-50 md:hidden transform transition-transform duration-500 ease-out border-l border-neutral-200 dark:border-neutral-800 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Menu
            </h2>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="animate-slide-down"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-5 py-4 rounded-xl font-medium text-lg text-neutral-700 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer - CTA */}
          <div className="p-6 border-t border-neutral-200 dark:border-neutral-700 space-y-3">
            <a
              href="/cv.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-5 py-3.5 rounded-xl font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-primary-600 to-primary-500 text-white px-5 py-3.5 rounded-xl font-medium hover:from-primary-700 hover:to-primary-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 shadow-lg shadow-primary-600/30"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
