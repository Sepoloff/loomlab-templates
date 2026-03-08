# Phase 4 — Responsiveness & Micro-interactions

## Mobile-First Improvements

### Barbershop Template

**Hero Section (Mobile):**
- Text: text-4xl → text-5xl (not too big, readable)
- Buttons: Stack vertically on mobile, horizontal on desktop
- Padding: Increase padding for touch targets

**Services (Mobile):**
- 1 column on mobile, 2 on tablet, 3 on desktop
- Better spacing between cards
- Images fill properly on small screens

**Gallery (Mobile):**
- 1 column, maintain aspect square
- Touch-friendly: larger tap targets for overlay

**Team (Mobile):**
- Vertical stack, good spacing
- Profile images full width
- Social icons always visible (not hover-only on mobile)

**Booking Form (Mobile):**
- Stack all inputs vertically
- Full-width inputs and buttons
- Larger font for better readability

---

### Salon Template

Similar responsive approach but with:
- Light theme optimized for mobile
- Better contrast for readability
- Touch-friendly spacing

---

## Micro-Interactions

### Buttons
```css
button {
  @apply transition-all duration-200 ease-out;
  @apply active:scale-95; /* Press feedback */
}

button:hover {
  @apply translate-y-[-2px]; /* Lift on hover */
}
```

### Links
```css
a {
  @apply relative;
}

a::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300;
}

a:hover::after {
  @apply w-full;
}
```

### Input Focus
```css
input:focus {
  @apply ring-2 ring-offset-2 ring-gold-500 scale-105;
  @apply transition-all duration-200;
}
```

### Scroll Animations
- Fade-in as sections come into view
- Slide-up for cards
- Stagger effect for multiple items

---

## Touch/Accessibility

1. **Touch Targets:**
   - All clickable elements ≥44x44px
   - Adequate spacing between elements

2. **Color Contrast:**
   - Text on background: 4.5:1 ratio (AA standard)
   - Interactive elements: clear visual indication

3. **Focus States:**
   - All interactive elements have focus rings
   - Keyboard navigation supported

4. **Labels:**
   - All form inputs have labels
   - Aria labels where needed

---

## Performance Checklist

- [ ] Images use proper aspect ratios
- [ ] No layout shifts (CLS < 0.1)
- [ ] Fast animations (60fps)
- [ ] Smooth scrolling
- [ ] Optimized fonts (limit to 2-3 families)
- [ ] No unnecessary animations on mobile

---

## Testing Breakpoints

- **Mobile:** 375px (iPhone SE)
- **Tablet:** 768px (iPad)
- **Desktop:** 1024px+ (Desktop)
- **Large Desktop:** 1440px+

Each breakpoint should be tested for:
- Visual layout
- Touch targets
- Image sizing
- Font sizing
- Spacing/padding

---

## Specific Improvements to Make

### Navbar
- Mobile: Toggle hamburger menu (already done)
- Tablet: Show more nav items
- Desktop: Full horizontal nav
- Add shadow on scroll

### Hero
- Mobile: Smaller heading, better CTA positioning
- Desktop: Full-screen hero with better imagery
- Smooth transition between sizes

### Form Inputs
- Mobile: Larger inputs, better spacing
- Desktop: Multi-column layout
- Clear labels and error states

### Footer
- Mobile: Stacked columns
- Desktop: 4-column grid
- Social icons larger on mobile

---

## Implementation Strategy

1. Start with mobile viewport (320px+)
2. Add tablet rules at 768px
3. Add desktop rules at 1024px
4. Test on real devices (if possible)
5. Check Chrome DevTools responsiveness
6. Verify touch interactions work

---

## Files to Focus On

1. **app/globals.css** — Add responsive utilities
2. **tailwind.config.ts** — Define breakpoints
3. **All component files** — Add responsive classes
4. **page.tsx** — Review section spacing

