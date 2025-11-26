import ContactSection from '@/components/sections/ContactSection'

export const metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch for project inquiries, collaborations, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28">
      <ContactSection />
    </div>
  )
}
