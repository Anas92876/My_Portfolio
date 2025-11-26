import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-[#1a1a1a] border border-neutral-100 dark:border-neutral-800 rounded-xl shadow-md dark:shadow-neutral-900/30 overflow-hidden transition-all duration-300 ${
        hover ? 'hover:shadow-xl dark:hover:shadow-primary-500/10 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
