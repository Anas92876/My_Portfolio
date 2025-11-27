export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Professional Full-Stack Developer',
    jobTitle: 'Full-Stack Developer & Automation Specialist',
    url: 'https://yourportfolio.com',
    sameAs: [
      'https://github.com/Anas92876',
      'https://www.linkedin.com/in/anas92876',
    ],
    email: 'mhab36817@gmail.com',
    description: 'Full-Stack Developer specializing in web development, automation, robotics, and IoT solutions. Expert in React, Next.js, Node.js, Python, and modern web technologies.',
    knowsAbout: [
      'Web Development',
      'Full-Stack Development',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Automation',
      'IoT',
      'Robotics',
      'REST API',
      'Database Design',
      'DevOps',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full-Stack Developer',
      skills: 'React, Next.js, Node.js, Python, TypeScript, JavaScript, Automation, IoT, Robotics',
      occupationLocation: {
        '@type': 'Place',
        name: 'Remote',
      },
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Your University',
    },
    workExample: [
      {
        '@type': 'CreativeWork',
        name: 'E-Commerce Platform',
        description: 'Full-stack solution with real-time features using Next.js and Node.js',
      },
      {
        '@type': 'CreativeWork',
        name: 'IoT Dashboard',
        description: 'Real-time device monitoring system with React and Python',
      },
      {
        '@type': 'CreativeWork',
        name: 'Automation API',
        description: 'Business workflow automation service using Node.js and Docker',
      },
    ],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Professional Developer Portfolio',
    url: 'https://yourportfolio.com',
    description: 'Professional portfolio showcasing web development, automation, robotics, and IoT projects',
    author: {
      '@type': 'Person',
      name: 'Professional Full-Stack Developer',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://yourportfolio.com/projects?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Full-Stack Development Services',
    url: 'https://yourportfolio.com',
    logo: 'https://yourportfolio.com/logo.png',
    description: 'Professional web development, automation, and IoT solutions',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Your Country',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional Inquiries',
      email: 'mhab36817@gmail.com',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      'https://github.com/Anas92876',
      'https://www.linkedin.com/in/anas92876',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  )
}
