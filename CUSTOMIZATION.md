# Quick Customization Guide

This guide will help you personalize the portfolio with your information in just a few minutes.

## 🎯 5-Minute Quick Start

### Step 1: Update Site Configuration

**File**: `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: 'Your Name Here',                    // ← Your name
  title: 'Your Custom Title',                // ← Browser tab title
  description: 'Your portfolio description', // ← SEO description
  url: 'https://yourwebsite.com',           // ← Your domain
  ogImage: 'https://yourwebsite.com/og.jpg',// ← Social share image
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourhandle',
    email: 'mailto:your.email@example.com',
  },
}
```

---

### Step 2: Update Hero Section

**File**: `components/sections/HeroSection.tsx`

```tsx
// Line 24-26: Main headline
<h1>
  Your Job Title &{' '}
  <span className="...">Your Specialty</span>
</h1>

// Line 31-34: Tagline
<p>
  Your compelling tagline or value proposition here.
  What makes you unique?
</p>
```

---

### Step 3: Update About Section

**File**: `components/sections/AboutSection.tsx`

```tsx
// Line 55-60: Your story (paragraph 1)
<p>
  Hi! I'm a [Your Title] with experience in...
</p>

// Line 61-65: Your story (paragraph 2)
<p>
  Today, I specialize in...
</p>

// Line 39-72: Update the 4 highlight cards
const highlights = [
  {
    title: 'X+ Years Experience',      // ← Your experience
    description: 'Your description'
  },
  // ... update all 4
]
```

---

### Step 4: Update Skills

**File**: `components/sections/SkillsSection.tsx`

```tsx
// Line 7-33: Update your skills
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', ...] // ← Your skills
  },
  {
    title: 'Backend',
    skills: ['Node.js', ...] // ← Your skills
  },
  // ... update all categories
]
```

---

### Step 5: Update Projects

**File**: `components/sections/ProjectsSection.tsx`

```tsx
// Line 7-67: Replace with your projects
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description...',
    tech: ['Tech', 'Stack'], // Technologies used
    features: ['Feature 1', 'Feature 2'],
    liveUrl: 'https://your-demo.com',
    githubUrl: 'https://github.com/you/repo',
    image: '🚀' // Or use next/image for real images
  },
  // Add more projects...
]
```

---

### Step 6: Update Experience

**File**: `components/sections/ExperienceSection.tsx`

```tsx
// Line 7-38: Your work experience
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2020 - Present',
    description: 'What you did...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ]
  },
  // Add more experiences...
]

// Line 40-59: Your achievements
const achievements = [
  {
    icon: '🏆',
    title: 'Your Achievement',
    description: 'What you achieved'
  },
  // Add more...
]
```

---

### Step 7: Update Services (Optional)

**File**: `components/sections/ServicesSection.tsx`

```tsx
// Line 7-80: Update or remove services
const services = [
  {
    title: 'Your Service',
    description: 'What you offer...',
    features: ['Feature 1', 'Feature 2']
  },
  // Add your services...
]
```

---

### Step 8: Update Contact Info

**File**: `components/sections/ContactSection.tsx`

```tsx
// Line 29-58: Update contact information
const contactInfo = [
  {
    label: 'Email',
    value: 'your.actual@email.com',      // ← Your email
    href: 'mailto:your.actual@email.com'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile', // ← Your LinkedIn
    href: 'https://linkedin.com/in/yourprofile'
  },
  // Update all...
]
```

---

### Step 9: Update Footer

**File**: `components/Footer.tsx`

```tsx
// Line 27-63: Update social links
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername', // ← Your GitHub
  },
  // Update all social links...
]
```

---

### Step 10: Update SEO Metadata

**File**: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your SEO description here',
  keywords: ['your', 'keywords', 'here'],
  openGraph: {
    url: 'https://yoursite.com',
    title: 'Your Title',
    description: 'Your description',
  },
}
```

---

## 🎨 Styling Customization

### Change Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    // Change these to your brand colors
    500: '#0ea5e9', // ← Main color
    600: '#0284c7', // ← Hover color
    // ...
  },
}
```

**Or use CSS variables** in `app/globals.css`:

```css
:root {
  --color-accent: #0ea5e9;        /* ← Your brand color */
  --color-accent-hover: #0284c7;  /* ← Darker shade */
}
```

---

### Change Fonts

**File**: `app/layout.tsx`

```typescript
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

// Then use it in tailwind.config.ts
fontFamily: {
  sans: ['var(--font-roboto)', 'sans-serif'],
}
```

---

### Adjust Spacing

**File**: `app/globals.css`

```css
:root {
  --space-md: 1rem;    /* ← Adjust spacing */
  --space-lg: 1.5rem;  /* ← Adjust spacing */
  --space-xl: 2rem;    /* ← Adjust spacing */
}
```

---

## 🖼️ Adding Real Images

### Replace Emoji Placeholders

**Current** (using emoji):
```tsx
<div className="...">
  <span className="text-6xl">🚀</span>
</div>
```

**Replace with** (real images):
```tsx
import Image from 'next/image'

<Image
  src="/images/project-1.jpg"
  alt="Project name"
  width={400}
  height={300}
  className="rounded-lg"
  priority // Only for above-the-fold images
/>
```

### Image Best Practices:
1. Add images to `public/images/`
2. Optimize before uploading (use tools like TinyPNG)
3. Always include `alt` text
4. Specify `width` and `height`
5. Use `priority` only for LCP images (usually hero image)

---

## 🎬 Customizing Animations

### Adjust Animation Speed

**File**: `app/globals.css`

```css
:root {
  --transition-fast: 150ms;   /* ← Faster */
  --transition-base: 300ms;   /* ← Normal */
  --transition-slow: 500ms;   /* ← Slower */
}
```

### Adjust Scroll Animation Delays

**File**: Components with `AnimateOnScroll`

```tsx
<AnimateOnScroll delay={0}>     {/* No delay */}
<AnimateOnScroll delay={100}>   {/* 100ms delay */}
<AnimateOnScroll delay={200}>   {/* 200ms delay */}
```

### Disable Animations

If you don't want animations:

```tsx
// Remove AnimateOnScroll wrapper
<AnimateOnScroll>
  <div>Content</div>
</AnimateOnScroll>

// Replace with:
<div>Content</div>
```

---

## 📱 Responsive Breakpoints

Default breakpoints (can be adjusted in `tailwind.config.ts`):

```typescript
screens: {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
}
```

Usage in components:
```tsx
className="text-sm md:text-base lg:text-lg"
//        mobile   tablet      desktop
```

---

## 🔧 Advanced Customizations

### Add a New Section

1. Create component: `components/sections/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Navbar.tsx`

### Change Layout

**File**: `components/Section.tsx`

```tsx
// Add new background option
background?: 'white' | 'gray' | 'gradient'

const bgColors = {
  white: 'bg-white',
  gray: 'bg-neutral-50',
  gradient: 'bg-gradient-to-br from-blue-50 to-purple-50'
}
```

### Add a Blog (Future Enhancement)

1. Create `app/blog/page.tsx`
2. Add blog posts in `content/posts/`
3. Use MDX or markdown for content
4. Add to navigation

---

## ✅ Checklist Before Deployment

- [ ] Updated all personal information
- [ ] Changed all placeholder links
- [ ] Updated social media links
- [ ] Customized colors to match brand
- [ ] Added real projects (at least 3-6)
- [ ] Updated experience and achievements
- [ ] Changed email addresses
- [ ] Updated SEO metadata
- [ ] Added real images (optional)
- [ ] Tested contact form UI
- [ ] Checked all links work
- [ ] Ran `npm run build` successfully
- [ ] Tested on mobile device
- [ ] Ran Lighthouse audit (95+ scores)

---

## 🚀 Quick Deploy Commands

```bash
# 1. Build the project
npm run build

# 2. Test production build locally
npm run start

# 3. Deploy (choose one):

# Vercel
vercel

# Netlify
netlify deploy --prod

# GitHub Pages
# Push to gh-pages branch
```

---

## 💡 Tips for Great Results

1. **Keep it Simple**: Don't overload with too many projects or skills
2. **Quality over Quantity**: 5 great projects > 20 mediocre ones
3. **Tell a Story**: Make your about section personal and authentic
4. **Update Regularly**: Keep your portfolio current
5. **Test Everything**: Check all links and forms before sharing
6. **Get Feedback**: Ask friends to review before going live
7. **Monitor Performance**: Run Lighthouse regularly
8. **Stay Consistent**: Use the same tone and style throughout

---

## 🆘 Common Issues

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Styling Not Working
```bash
# Rebuild Tailwind
npm run dev
```

### Images Not Showing
- Check file path: `/images/filename.jpg`
- Verify file exists in `public/images/`
- Check file extension matches

---

**Need Help?**
- Check `README.md` for setup instructions
- Check `PERFORMANCE.md` for optimization details
- Review existing components for examples

Happy customizing! 🎉
