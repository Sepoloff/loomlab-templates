# Phase 3 — CSS & Animation Optimizations

## Global CSS Enhancements

### Add to globals.css (both templates):

```css
/* Scroll reveal animations */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Better shadows */
.shadow-premium {
  @apply shadow-lg hover:shadow-2xl transition-all duration-300;
}

/* Smooth scrolling to anchors */
html {
  @apply scroll-smooth;
}

/* Better focus states for accessibility */
a:focus-visible,
button:focus-visible {
  @apply outline-2 outline-offset-2;
}

/* Barbershop specific */
@layer components {
  .btn-barbershop {
    @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300;
  }
  
  .btn-barbershop-primary {
    @apply bg-gold-500 text-dark-900 hover:bg-gold-600 hover:shadow-[0_0_30px_rgba(212,165,116,0.6)];
  }
  
  .btn-barbershop-secondary {
    @apply border-2 border-gold-500 text-gold-500 hover:bg-gold-500/10;
  }
}

/* Salon specific */
@layer components {
  .btn-salon {
    @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300;
  }
  
  .btn-salon-primary {
    @apply bg-rose-500 text-white hover:bg-rose-600 hover:shadow-[0_0_30px_rgba(244,63,110,0.5)];
  }
  
  .btn-salon-secondary {
    @apply border-2 border-rose-500 text-rose-500 hover:bg-rose-500/10;
  }
}

/* Form improvements */
input:focus,
select:focus,
textarea:focus {
  @apply outline-none ring-2 ring-offset-2 transition-all;
}

/* Responsive text scaling */
@media (max-width: 640px) {
  h1 {
    @apply text-3xl;
  }
  h2 {
    @apply text-2xl;
  }
  h3 {
    @apply text-xl;
  }
}
```

---

## Navbar Enhancements

1. Add logo icon or image
2. Better mobile menu animation (slide down)
3. Active link highlighting (scrollspy)
4. Sticky navbar shadow
5. Better spacing on desktop

---

## Section-specific CSS Classes

### Gallery
```css
.gallery-item {
  @apply relative overflow-hidden rounded-lg aspect-square;
}

.gallery-item::after {
  content: '';
  @apply absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300;
}
```

### Services
```css
.service-card {
  @apply rounded-xl bg-dark-800 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300;
}

.service-image {
  @apply h-56 object-cover rounded-t-xl;
}
```

### Team
```css
.team-member {
  @apply rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300;
}

.team-member-image {
  @apply aspect-square object-cover;
}

.team-social {
  @apply absolute bottom-0 left-0 right-0 flex justify-center gap-3 py-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300;
}
```

---

## Responsive Improvements

1. **Mobile First:** Ensure all sections work on small screens
2. **Tablet Optimization:** Better use of mid-screen space
3. **Desktop Polish:** Full-screen layouts optimized
4. **Touch Targets:** Buttons ≥44px for mobile UX

---

## Performance Optimizations

1. Lazy load images (use `loading="lazy"`)
2. Optimize image sizes with srcset
3. Use CSS transforms instead of width/height changes
4. Minimize repaints with will-change

---

## Dark/Light Mode Consistency

- Barbershop: Dark mode primary, light mode secondary
- Salon: Light mode primary, dark mode optional
- Ensure all text has sufficient contrast (WCAG AA)

---

## Animation Performance

1. Use `transform` and `opacity` for smooth 60fps animations
2. Avoid animating `width` or `height` when possible
3. Use `will-change` sparingly

---

## Testing Checklist

- [ ] All sections responsive (mobile, tablet, desktop)
- [ ] Hover effects smooth and performant
- [ ] Forms accessible (labels, focus states)
- [ ] Images load properly
- [ ] Dark/light mode works throughout
- [ ] Touch/click areas adequate
- [ ] No layout shifts (CLS)
- [ ] Fast animations (60fps)

