# Templates Directory Structure

## Complete File Layout

```
templates/
├── README.md                                 # Main templates overview
├── STRUCTURE.md                              # This file
│
├── barbershop-template/
│   ├── package.json                          # Dependencies (Next.js, React, Tailwind, etc.)
│   ├── next.config.js                        # Next.js configuration
│   ├── tailwind.config.ts                    # Tailwind CSS theme with dark colors
│   ├── tsconfig.json                         # TypeScript configuration
│   ├── .gitignore                            # Git ignore rules
│   ├── README.md                             # Barbershop template documentation
│   │
│   ├── app/
│   │   ├── layout.tsx                        # Root layout with metadata
│   │   ├── page.tsx                          # Home page (imports all sections)
│   │   ├── globals.css                       # Global styles and animations
│   │
│   └── components/
│       ├── Navbar.tsx                        # Navigation with theme toggle
│       ├── Hero.tsx                          # Hero section with CTAs
│       ├── Services.tsx                      # 6 Services grid
│       ├── Gallery.tsx                       # Image gallery with lightbox
│       ├── Team.tsx                          # 4 Team member profiles
│       ├── Testimonials.tsx                  # Client reviews with ratings
│       ├── Booking.tsx                       # Appointment form with date/time pickers
│       ├── Location.tsx                      # Google Maps, contact info, hours
│       ├── Footer.tsx                        # Footer with links and social media
│       ├── WhatsAppButton.tsx                # Fixed WhatsApp chat button
│       │
│       └── ui/
│           └── Button.tsx                    # Reusable button component
│
│
├── salon-template/
│   ├── package.json                          # Dependencies (Next.js, React, Tailwind, etc.)
│   ├── next.config.js                        # Next.js configuration
│   ├── tailwind.config.ts                    # Tailwind CSS theme with light colors
│   ├── tsconfig.json                         # TypeScript configuration
│   ├── .gitignore                            # Git ignore rules
│   ├── README.md                             # Salon template documentation
│   │
│   ├── app/
│   │   ├── layout.tsx                        # Root layout with metadata
│   │   ├── page.tsx                          # Home page (imports all sections)
│   │   ├── globals.css                       # Global styles and animations
│   │
│   └── components/
│       ├── Navbar.tsx                        # Navigation with theme toggle
│       ├── Hero.tsx                          # Hero section with beauty tagline
│       ├── Services.tsx                      # 6 Services with pricing
│       ├── Portfolio.tsx                     # Gallery with category filters
│       ├── Staff.tsx                         # 4 Beauty professional profiles
│       ├── SpecialOffers.tsx                 # Promotions & loyalty program
│       ├── Testimonials.tsx                  # Client reviews (5)
│       ├── Booking.tsx                       # Appointment form
│       ├── ContactSection.tsx                # Google Maps, contact, footer
│       ├── Footer.tsx                        # Export wrapper
│       ├── WhatsAppButton.tsx                # Fixed WhatsApp chat button
│       │
│       └── ui/
│           └── Button.tsx                    # Reusable button component
```

## Component Descriptions

### Both Templates

#### Navigation & Layout
- **Navbar.tsx** - Sticky navbar with logo, nav links, theme toggle, mobile menu
- **Footer.tsx/ContactSection.tsx** - Footer with quick links, social, company info

#### Sections
- **Hero.tsx** - Full-screen hero with background, headline, CTA buttons
- **Services.tsx** - 6 services in responsive grid with icons/descriptions
- **Gallery/Portfolio.tsx** - Image grid with hover effects, lightbox, filters (salon)
- **Team/Staff.tsx** - 3-4 member profiles with photos, specialties, ratings
- **Testimonials.tsx** - 3-5 client reviews with star ratings
- **Booking.tsx** - Form with date/time pickers, name, email, phone, service selection
- **Location/ContactSection.tsx** - Embedded Google Maps, address, phone, email, hours

#### Features Unique to Each
- **Barbershop:** None extra (6 base sections)
- **Salon:** SpecialOffers.tsx (promotions, packages, loyalty program info)

#### UI Components
- **Button.tsx** - Reusable component with variants (primary, secondary, ghost) and sizes

#### Special Features
- **WhatsAppButton.tsx** - Fixed floating button for WhatsApp chat

## Color Schemes

### Barbershop Template
- **Primary Dark:** #1a1a1a, #2d2d2d (dark-900, dark-800)
- **Accent:** #d4a574 (gold-500)
- **Secondary Accent:** #10b981 (emerald-500)
- **Text:** #f9f9f9 - #6d6d6d (light to medium dark)

### Salon Template
- **Primary Light:** #ffffff, #f9f9f9 (light-50, light-100)
- **Primary Accent:** #ff4d94 (rose-500)
- **Secondary Accent:** #d4a574 (gold-500)
- **Text:** #2a2a2a - #8a8a8a (dark to light)

## Installation & Development

### One-Time Setup
```bash
# Install Node 18+

# For Barbershop Template
cd barbershop-template
npm install
npm run dev

# For Salon Template
cd salon-template
npm install
npm run dev
```

### Development Scripts
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## Key Features Summary

✅ **Next.js 16+** with App Router
✅ **React 19+** with latest hooks
✅ **Tailwind CSS v4** with custom theme
✅ **Radix UI** for accessible components
✅ **Lucide React** icons
✅ **TypeScript** throughout
✅ **Fully Responsive** (mobile-first)
✅ **100% Generic** (no hardcoded names)
✅ **Dark/Light Toggle**
✅ **Smooth Animations**
✅ **Placeholder Images** (Unsplash)
✅ **SEO Ready**
✅ **Production Ready**

## Production Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
Drag and drop `out/` or connect Git repository

### Any Node.js Hosting
```bash
npm run build
npm start
```

## Customization Quick Reference

| Item | File(s) | Change |
|------|---------|--------|
| Business Name | `app/layout.tsx`, `components/Navbar.tsx` | Edit metadata & logo |
| Phone Number | `components/Location.tsx`, `components/WhatsAppButton.tsx` | Update tel: & wa.me links |
| Email | `components/Location.tsx` | Update mailto: link |
| Address | `components/Location.tsx` | Update text & iframe src |
| Colors | `tailwind.config.ts` | Modify theme colors |
| Services | `components/Services.tsx` | Edit service list |
| Team | `components/Team.tsx` / `Staff.tsx` | Update names & images |
| Testimonials | `components/Testimonials.tsx` | Add real reviews |
| Images | All components | Replace Unsplash URLs |
| Prices (Salon) | `components/Services.tsx` | Update price strings |
| Hours | `components/Location.tsx` | Modify business hours |

## Notes

- All images currently use Unsplash URLs (free, no credits needed)
- Replace with your own images for production
- All components use Tailwind CSS - no additional CSS files needed
- Theme toggle persists in localStorage
- Fully responsive without media query breakpoints (Tailwind mobile-first)
- Ready for integration with booking APIs, payment systems, CMS

---

**Ready to launch? Follow the README.md in either template directory!**
