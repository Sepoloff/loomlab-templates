# Premium Barbershop Website Template

A modern, fully responsive website template for barbershops and men's salons built with Next.js, React, and Tailwind CSS.

## Features

- ✨ Modern dark premium aesthetic with gold accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🌙 Theme toggle (dark/light mode)
- 📅 Appointment booking system
- 🖼️ Image gallery with lightbox
- 👥 Team profiles section
- ⭐ Testimonials showcase
- 📍 Location and contact information
- 💬 Fixed WhatsApp chat button
- ♿ Accessible components with Radix UI
- ⚡ Optimized performance with Next.js Image

## Tech Stack

- **Next.js 16+** - React framework
- **React 19+** - UI library
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download this template
```bash
cd barbershop-template
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
barbershop-template/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── Gallery.tsx         # Image gallery
│   ├── Team.tsx            # Team profiles
│   ├── Testimonials.tsx    # Client reviews
│   ├── Booking.tsx         # Booking form
│   ├── Location.tsx        # Map and contact info
│   ├── Footer.tsx          # Footer
│   ├── WhatsAppButton.tsx  # WhatsApp chat button
│   └── ui/
│       └── Button.tsx      # Reusable button component
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Change Business Name

1. **Navbar** - Edit `components/Navbar.tsx`
   ```tsx
   <Link href="/" className="text-2xl font-bold gradient-text">
     Your Business Name
   </Link>
   ```

2. **Metadata** - Edit `app/layout.tsx`
   ```tsx
   export const metadata: Metadata = {
     title: 'Your Business | Services',
     description: 'Your business description',
   }
   ```

### Add Your Contact Information

1. **Phone Number** - Update in `components/Location.tsx` and `components/WhatsAppButton.tsx`
2. **Email** - Update in `components/Location.tsx`
3. **Address** - Update in `components/Location.tsx`

### Add Your Images

1. Replace gallery images in `components/Gallery.tsx`
2. Replace team member photos in `components/Team.tsx`
3. Add your background images as needed

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
- Gold accents
- Emerald highlights
- Dark grays and blacks

### Modify Services

Edit `components/Services.tsx` to add/remove services and update descriptions.

### Update Testimonials

Edit `components/Testimonials.tsx` to add real customer reviews.

### Configure Booking

Update the booking form in `components/Booking.tsx` to integrate with your backend or booking service.

## Building for Production

```bash
npm run build
npm start
```

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Code splitting and lazy loading
- Optimized for mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is open source and available for use.

## Support

For issues or questions, please refer to the documentation or create an issue in your repository.

---

**Ready to launch?** Customize the template with your business details and deploy to Vercel, Netlify, or any hosting platform that supports Next.js!
