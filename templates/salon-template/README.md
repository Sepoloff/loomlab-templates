# Premium Beauty Salon Website Template

A luxurious, fully responsive website template for women's salons, nail studios, and beauty services built with Next.js, React, and Tailwind CSS.

## Features

- ✨ Elegant light aesthetic with rose and gold accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Smooth animations and elegant transitions
- 🌙 Theme toggle (light/dark mode)
- 💅 Service catalog with pricing
- 🖼️ Portfolio gallery with filter options
- 👩‍💼 Staff profiles with specialties
- 🎁 Special offers and loyalty program showcase
- ⭐ Client testimonials
- 📅 Appointment booking system
- 📍 Location, contact, and hours information
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
cd salon-template
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
salon-template/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services with pricing
│   ├── Portfolio.tsx       # Gallery with filters
│   ├── Staff.tsx           # Team profiles
│   ├── SpecialOffers.tsx   # Promotions & loyalty
│   ├── Testimonials.tsx    # Client reviews
│   ├── Booking.tsx         # Appointment form
│   ├── ContactSection.tsx  # Map and contact info
│   ├── Footer.tsx          # Footer export
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
     Your Salon Name
   </Link>
   ```

2. **Metadata** - Edit `app/layout.tsx`
   ```tsx
   export const metadata: Metadata = {
     title: 'Your Salon | Premium Beauty Services',
     description: 'Your salon description',
   }
   ```

### Add Your Contact Information

1. **Phone Number** - Update in `components/ContactSection.tsx` and `components/WhatsAppButton.tsx`
2. **Email** - Update in `components/ContactSection.tsx`
3. **Address** - Update in `components/ContactSection.tsx`
4. **Hours** - Update business hours in `components/ContactSection.tsx`

### Add Your Images

1. Replace portfolio images in `components/Portfolio.tsx`
2. Replace staff member photos in `components/Staff.tsx`
3. Update background images as needed

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
- Rose pink (primary color)
- Gold accents
- Soft pastels and creams

### Modify Services

Edit `components/Services.tsx` to:
- Add/remove services
- Update descriptions
- Change pricing

### Update Special Offers

Edit `components/SpecialOffers.tsx` to add your current promotions and loyalty program details.

### Update Testimonials

Edit `components/Testimonials.tsx` to add real client reviews and ratings.

### Configure Booking

Update the booking form in `components/Booking.tsx` to integrate with your backend or booking service (Calendly, Acuity Scheduling, etc.).

## Color Palette

The template uses a sophisticated light aesthetic:

- **Primary:** Rose (`#ff4d94`) 
- **Accent:** Gold (`#d4a574`)
- **Background:** Light cream tones
- **Text:** Dark text on light backgrounds

All colors are customizable in `tailwind.config.ts`.

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Code splitting and lazy loading
- Optimized for mobile-first approach
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large screens: 1280px and up

## SEO Optimizations

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions
- Open Graph tags (ready to add)
- Structured data support

## Building for Production

```bash
npm run build
npm start
```

## Deployment Options

- **Vercel** (recommended) - Native Next.js support
- **Netlify** - Zero-config deployment
- **AWS Amplify** - Scalable cloud hosting
- **Docker** - Container deployment

## Adding More Pages

To add new pages, create files in the `app` directory:

```bash
# Add a services detail page
app/services/page.tsx

# Add a blog section
app/blog/page.tsx
```

## Integration Examples

The template is ready to integrate with:
- **Booking Services:** Calendly, Acuity Scheduling, Appointy
- **Payment:** Stripe, Square, PayPal
- **CRM:** Shopify, HubSpot
- **Email:** Mailchimp, SendGrid

## License

This template is open source and available for use.

## Support

For questions or customization needs, refer to the documentation or create an issue in your repository.

---

**Ready to launch?** Customize the template with your salon details and deploy to Vercel, Netlify, or any hosting platform that supports Next.js!
