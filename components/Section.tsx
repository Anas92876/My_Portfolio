import { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  background?: 'white' | 'gray'
}

export default function Section({
  id,
  children,
  className = '',
  background = 'white'
}: SectionProps) {
  const bgColors = {
    white: 'bg-white dark:bg-[#0f0f0f]',
    gray: 'bg-neutral-50 dark:bg-[#1a1a1a]',
  }

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgColors[background]} transition-colors duration-300 ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}
