// Site configuration
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Portfolio | Full-Stack Developer & Automation Specialist',
  description: 'Portfolio of a Full-Stack Developer specializing in web development, automation, robotics, and IoT solutions.',
  url: 'https://yourportfolio.com',
  ogImage: 'https://yourportfolio.com/og-image.jpg',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'mailto:your.email@example.com',
  },
}

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Services', href: 'services' },
  { label: 'Contact', href: 'contact' },
] as const
