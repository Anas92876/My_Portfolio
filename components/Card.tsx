import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md dark:shadow-primary-500/10 border border-transparent dark:border-neutral-800 overflow-hidden transition-all duration-300 ${
        hover ? 'hover:shadow-xl dark:hover:shadow-primary-500/20 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
