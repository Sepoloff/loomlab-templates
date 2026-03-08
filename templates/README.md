# 🎨 Loomlab Templates

Professional, production-ready website templates for barbershops and salons. Built with Next.js, React, and Tailwind CSS.

## 🚀 Features

### Both Templates Include

- **Responsive Design** — Mobile-first, works on all devices
- **Dark/Light Mode** — Theme toggle included
- **Multi-language Ready** — Portuguese (PT-PT) included, easily customizable
- **Optimized Images** — Local image assets for instant loading
- **Smooth Animations** — CSS-based, 60fps-ready animations
- **Accessibility** — WCAG AA compliant with focus states
- **SEO Ready** — Meta tags, semantic HTML
- **Fast Performance** — ~800ms build time with Turbopack

### Template-Specific

#### Barbershop Template (Dark Premium)
- Premium dark theme (gold & emerald accents)
- Service showcase with detailed descriptions
- Team member profiles with specialties
- Gallery of barber work
- Booking system integration-ready
- Location & hours display
- WhatsApp integration

#### Salon Template (Light Elegant)
- Elegant light theme (rose & gold accents)
- Service showcase with pricing
- Portfolio/gallery with before-after cards
- Staff profiles with specialties
- Special offers & promotions section
- Booking system integration-ready
- Location & hours display
- WhatsApp integration

---

## 📦 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to template directory
cd barbershop-template
# or
cd salon-template

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
template-name/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & animations
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Rating.tsx
│   │   ├── Avatar.tsx
│   │   └── Spinner.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Team.tsx (Barbershop) or Staff.tsx (Salon)
│   ├── Testimonials.tsx
│   ├── Booking.tsx
│   ├── Location.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── WhatsAppButton.tsx
├── public/
│   └── images/           # Local image assets
│       ├── {template}/
│       │   ├── hero.jpg
│       │   ├── services/
│       │   ├── gallery/
│       │   └── team/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change colors:

**Barbershop:**
```ts
colors: {
  dark: { ... },      // Dark backgrounds
  gold: { ... },      // Primary accent
  emerald: { ... },   // Secondary accent
}
```

**Salon:**
```ts
colors: {
  rose: { ... },      // Primary accent
  pink: { ... },      // Secondary accent
  light: { ... },     // Light backgrounds
}
```

### Content

Update content in individual components:

- **Hero:** `components/Hero.tsx`
- **Services:** `components/Services.tsx`
- **Team:** `components/Team.tsx` (edit team members array)
- **Contact Info:** `components/Location.tsx`
- **Navigation:** `components/Navbar.tsx`

### Images

Replace images in `public/images/{template}/` directory:

- Hero background: `hero.jpg`
- Service images: `services/*.jpg`
- Gallery: `gallery/*.jpg`
- Team/Staff: `team/*.jpg`

### Styling

Global styles: `app/globals.css`
Component-specific styles: Use Tailwind classes in component files

---

## 🔧 Components API

### Button
```tsx
<Button 
  variant="primary"     // primary, secondary, ghost, outline
  size="lg"            // sm, md, lg, xl
  loading={false}
  disabled={false}
>
  Click me
</Button>
```

### Card
```tsx
<Card hoverable className="p-6">
  Content here
</Card>
```

### Badge
```tsx
<Badge variant="primary" size="md">
  Label
</Badge>
```

### Rating
```tsx
<Rating value={5} max={5} size="md" />
```

### Avatar
```tsx
<Avatar 
  src="/image.jpg"
  name="John Doe"
  size="lg"
/>
```

### Spinner
```tsx
<Spinner size="md" color="gold" />  // Barbershop
<Spinner size="md" color="rose" />  // Salon
```

---

## 📱 Responsive Design

Templates use Tailwind's responsive prefixes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project at vercel.com
3. Deploy with one click

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Self-Hosted
```bash
npm run build
npm run start
```

---

## 📊 Performance

- **Build Time:** ~800ms (Turbopack)
- **Bundle Size:** Optimized with Next.js
- **Images:** Local assets, instant loading
- **Animations:** CSS-based, 60fps
- **Lighthouse Score:** 90+

---

## ♿ Accessibility

- WCAG AA compliant
- Keyboard navigation
- Focus indicators
- Semantic HTML
- Alt text on images
- Form labels

---

## 🌙 Dark/Light Mode

Toggle included in Navbar. Theme preference stored in localStorage.

Edit colors in `app/globals.css` or `tailwind.config.ts` to customize appearance.

---

## 📞 Integration Points

### WhatsApp
Update in `components/WhatsAppButton.tsx`:
```tsx
const whatsappLink = "https://wa.me/YOUR_NUMBER"
```

### Booking System
Edit `components/Booking.tsx` to integrate with your backend API.

### Contact Form
Update form endpoint in `components/Booking.tsx`

---

## 🎯 Best Practices

1. **Images** — Use local assets in `public/images/`
2. **Content** — Update text in component files
3. **Colors** — Modify in `tailwind.config.ts`
4. **Fonts** — Change in `app/layout.tsx`
5. **Animations** — Adjust timing in `app/globals.css`

---

## 📝 License

MIT License — Use freely in your projects

---

## 🤝 Support

For questions or customization needs, refer to:
- Next.js docs: https://nextjs.org
- Tailwind CSS: https://tailwindcss.com
- React docs: https://react.dev

---

**Built with ❤️ by Loomlab**

*Made for beauty professionals who deserve better websites.*
