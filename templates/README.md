# Professional Website Templates

Production-ready Next.js + React + Tailwind CSS website templates for service businesses.

## 🎯 Templates Included

### 1. Barbershop Template
Premium dark-themed website template for barbershops and men's salons.

- **Aesthetic:** Dark premium with gold and emerald accents
- **Features:** Services, gallery, team profiles, testimonials, booking, location
- **Color Scheme:** Dark grays, blacks, gold (#d4a574), emerald green
- **Location:** `/barbershop-template`

**Quick Start:**
```bash
cd barbershop-template
npm install
npm run dev
```

### 2. Salon Template
Elegant light-themed website template for women's salons and beauty services.

- **Aesthetic:** Light and feminine with rose and gold accents
- **Features:** Services with pricing, portfolio with filters, staff, special offers, testimonials, booking, loyalty program
- **Color Scheme:** Soft pastels, rose (#ff4d94), gold, creams and whites
- **Location:** `/salon-template`

**Quick Start:**
```bash
cd salon-template
npm install
npm run dev
```

## 🚀 Both Templates Include

### Core Features
✅ **Fully Responsive Design** - Mobile, tablet, and desktop optimized
✅ **Next.js 16+** - Latest React framework with App Router
✅ **React 19+** - Modern React with latest features
✅ **Tailwind CSS v4** - Utility-first styling
✅ **Radix UI** - Accessible component primitives
✅ **Lucide React** - Beautiful icon library
✅ **TypeScript** - Full type safety
✅ **Smooth Animations** - Professional transitions and effects

### Built-in Sections
- **Navbar** with theme toggle and mobile menu
- **Hero Section** with CTAs and background imagery
- **Services Grid** with descriptions and pricing (salon)
- **Gallery/Portfolio** with lightbox and filters
- **Team Section** with member profiles and ratings
- **Testimonials** with client reviews and ratings
- **Booking Form** with date/time pickers
- **Location Section** with embedded Google Maps
- **Contact Information** with hours and links
- **Footer** with navigation and social media
- **WhatsApp Button** - Fixed floating chat button

### Developer Features
- 100% Generic and Reusable - No hardcoded business names
- Clean Component Architecture - Organized and maintainable
- Accessibility First - WCAG compliant with Radix UI
- Performance Optimized - Image optimization, code splitting
- SEO Ready - Semantic HTML and meta tags
- Dark/Light Mode Toggle - Theme switching support
- Production Ready - Can deploy immediately

## 📋 Technology Stack

```json
{
  "framework": "Next.js 16+",
  "ui-library": "React 19+",
  "styling": "Tailwind CSS v4",
  "components": "Radix UI",
  "icons": "Lucide React",
  "language": "TypeScript",
  "node": "18+"
}
```

## 🎨 Customization Guide

### For Both Templates

1. **Change Business Name**
   - Edit `app/layout.tsx` metadata
   - Update `components/Navbar.tsx` logo
   - Update footer information

2. **Add Your Images**
   - Replace gallery/portfolio images in components
   - Add staff/team photos
   - Update background imagery

3. **Update Contact Info**
   - Phone number
   - Email address
   - Physical address
   - Business hours

4. **Customize Colors**
   - Edit `tailwind.config.ts`
   - All colors are configurable
   - Use the same Tailwind naming convention

5. **Modify Services**
   - Add/remove services in components
   - Update descriptions and pricing
   - Change icons

6. **Add Your Content**
   - Real testimonials
   - Team member information
   - Special offers and promotions
   - Booking integrations

## 🔧 Configuration Files

Each template includes:

- **package.json** - Dependencies and scripts
- **next.config.js** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS theme
- **tsconfig.json** - TypeScript configuration
- **.gitignore** - Git ignore rules
- **README.md** - Template-specific documentation

## 📦 Installation & Deployment

### Local Development
```bash
cd [template-name]
npm install
npm run dev
# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Connect your Git repository
# or drag and drop the build folder
```

## 🎯 Use Cases

### Barbershop Template
- Traditional barbershops
- Men's grooming salons
- Haircut and styling studios
- Beard trimming services
- Professional men's grooming centers

### Salon Template
- Women's beauty salons
- Nail art studios
- Hair and makeup services
- Spa and wellness centers
- Beauty treatment providers
- Manicure/pedicure studios

## 🔄 Integration Ready

Both templates are ready to integrate with:

- **Booking Systems:** Calendly, Acuity Scheduling, Appointy, Square Appointments
- **Payment Processing:** Stripe, Square, PayPal
- **CRM Tools:** Shopify, HubSpot, Salesforce
- **Email Marketing:** Mailchimp, SendGrid, Klaviyo
- **Analytics:** Google Analytics, Plausible

## 🛠️ Customization Examples

### Change Theme Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-color',
  accent: '#your-color',
}
```

### Add Your Phone Number
Update `components/Location.tsx` and `components/WhatsAppButton.tsx`

### Modify Services List
Edit `components/Services.tsx` (barbershop) or `components/Services.tsx` (salon)

### Update Team Members
Replace images and info in `components/Team.tsx` (barbershop) or `components/Staff.tsx` (salon)

## 📱 Responsive Breakpoints

Both templates are optimized for:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px - 1920px
- Ultra-wide: 1921px+

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast standards met
- Radix UI accessible components

## 📄 License

Both templates are open source and available for personal and commercial use.

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## 🚀 Next Steps

1. Choose your template (Barbershop or Salon)
2. Navigate to the template directory
3. Follow the README in that directory
4. Customize with your business information
5. Deploy to your preferred hosting platform

---

**Everything you need to launch your professional beauty/grooming website! 🎉**
