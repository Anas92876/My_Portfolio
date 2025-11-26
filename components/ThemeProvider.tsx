'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'auto'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  const updateDOM = (newTheme: Theme) => {
    const root = document.documentElement
    const resolved = newTheme === 'auto' ? getSystemTheme() : newTheme

    root.classList.remove('light', 'dark')
    root.classList.add(resolved)

    console.log('Theme updated:', newTheme, 'Resolved:', resolved, 'Classes:', root.className)

    setResolvedTheme(resolved)
  }

  const setTheme = (newTheme: Theme) => {
    console.log('setTheme called with:', newTheme)
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    updateDOM(newTheme)
  }

  useEffect(() => {
    console.log('ThemeProvider mounted')

    // Load theme from localStorage
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light'
    console.log('Saved theme from localStorage:', savedTheme)

    setThemeState(savedTheme)
    updateDOM(savedTheme)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const currentTheme = localStorage.getItem('theme') as Theme
      if (currentTheme === 'auto') {
        updateDOM('auto')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Update DOM when theme state changes
  useEffect(() => {
    console.log('Theme state changed to:', theme)
    updateDOM(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
