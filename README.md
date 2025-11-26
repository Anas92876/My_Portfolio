# Portfolio Website

A premium, high-performance personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to achieve 95+ Lighthouse scores across all categories while providing a smooth, modern user experience.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Performance Optimized**: Achieves 95+ Lighthouse scores for Performance, Accessibility, SEO, and Best Practices
- **Smooth Animations**: Subtle, GPU-friendly animations using Intersection Observer API
- **Smart Navbar**: Automatically shrinks on scroll with smooth transitions (no janky scroll handlers)
- **Fully Responsive**: Mobile-first design that works perfectly on all screen sizes
- **SEO Ready**: Comprehensive metadata, sitemap, robots.txt, and Open Graph tags
- **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation, and focus states
- **Static Export**: Pre-rendered for maximum performance and easy deployment

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page (all sections)
│   ├── globals.css          # Global styles and Tailwind
│   ├── manifest.ts          # Web app manifest
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # Reusable React components
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── ContactSection.tsx
│   ├── AnimateOnScroll.tsx  # Scroll animation wrapper
│   ├── Badge.tsx            # Badge component
│   ├── Button.tsx           # Button component
│   ├── Card.tsx             # Card component
│   ├── Footer.tsx           # Footer with links
│   ├── Navbar.tsx           # Smart navbar with scroll behavior
│   ├── Section.tsx          # Section wrapper
│   └── SectionTitle.tsx     # Section title component
├── lib/                     # Utilities and constants
│   └── constants.ts         # Site configuration
├── public/                  # Static assets
│   └── robots.txt          # SEO robots file
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Preview Production Build

```bash
npm run start
```

## 🎨 Customization

### Update Personal Information

1. **Site Configuration** (`lib/constants.ts`):
   - Update name, title, description
   - Add your social media links
   - Configure site URL

2. **Content**:
   - Update sections in `components/sections/` with your information
   - Modify projects, skills, experience, and services
   - Customize the about section story

3. **Styling** (`app/globals.css` and `tailwind.config.ts`):
   - Adjust color palette (primary, accent colors)
   - Modify spacing, typography, and animations
   - Customize breakpoints if needed

4. **Metadata** (`app/layout.tsx`):
   - Update SEO metadata
   - Add your Open Graph image
   - Configure social media tags

### Adding Images

1. Add optimized images to `public/images/`
2. Use Next.js `Image` component (commented out in components - currently using emojis for placeholders)
3. Always specify width, height, or aspect ratio to prevent CLS

## ⚡ Performance Optimization Features

This portfolio is built with performance as a top priority:

### 1. **No Heavy JavaScript**
- Uses Intersection Observer API instead of scroll event listeners
- Minimal client-side JavaScript
- No heavy animation libraries

### 2. **Optimized Animations**
- GPU-accelerated transforms
- CSS-based animations
- Respects `prefers-reduced-motion`
- Animations are progressive enhancements

### 3. **Smart Navbar**
- Uses Intersection Observer (not scroll events)
- Smooth transitions with CSS
- No layout shift (no jumping)
- GPU-friendly with `willChange` property

### 4. **Bundle Optimization**
- Tree-shaking enabled
- Static export for pre-rendering
- Code splitting where appropriate
- Minimal dependencies

### 5. **Image Optimization**
- Next.js Image component ready (when you add real images)
- Aspect ratios defined to prevent CLS
- Lazy loading by default

### 6. **SEO & Accessibility**
- Semantic HTML throughout
- Proper heading hierarchy
- ARIA labels where needed
- Focus states on all interactive elements
- Keyboard navigable
- High color contrast ratios

## 🎯 Lighthouse Scores

This portfolio is designed to achieve:

- **Performance**: 95+ (Static export, minimal JS, optimized assets)
- **Accessibility**: 95+ (Semantic HTML, ARIA, keyboard nav, contrast)
- **Best Practices**: 95+ (HTTPS ready, secure headers, modern practices)
- **SEO**: 95+ (Metadata, sitemap, semantic HTML, mobile-friendly)

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS Transitions + Intersection Observer API
- **Icons**: Inline SVG (no icon library overhead)
- **Fonts**: Next.js Font Optimization
- **Deployment Ready**: Vercel, Netlify, or any static host

## 📝 Common Problems Avoided

### ❌ Problem: Heavy scroll event listeners causing jank
✅ **Solution**: Used Intersection Observer API for scroll detection

### ❌ Problem: Large animation libraries bloating bundle
✅ **Solution**: Pure CSS animations with minimal JavaScript

### ❌ Problem: Layout shift from images loading
✅ **Solution**: Explicit dimensions and aspect ratios

### ❌ Problem: Unoptimized fonts causing FOIT/FOUT
✅ **Solution**: Next.js font optimization with `font-display: swap`

### ❌ Problem: Unnecessary client-side rendering
✅ **Solution**: Static export with pre-rendering

### ❌ Problem: Poor mobile performance
✅ **Solution**: Mobile-first approach, lightweight components

### ❌ Problem: Accessibility issues
✅ **Solution**: Semantic HTML, ARIA labels, focus management, keyboard navigation

## 📦 Deployment

This portfolio can be deployed to any static hosting service:

### Vercel (Recommended)
```bash
npm run build
# Deploy the out/ directory
```

### Netlify
```bash
npm run build
# Deploy the out/ directory
```

### GitHub Pages
```bash
npm run build
# Copy out/ directory to gh-pages branch
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📧 Contact

Update contact information in:
- `components/sections/ContactSection.tsx`
- `components/Footer.tsx`
- `lib/constants.ts`

---

**Built with ❤️ using Next.js and Tailwind CSS**
