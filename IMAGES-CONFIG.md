# Loomlab Templates — Image URLs

Use estas URLs nos templates como exemplos reais. São de Unsplash (free, CC0).

## Barbershop Template

### Hero Background
```
https://images.unsplash.com/photo-1585747860715-cd4628902d4a?w=1200&h=600&fit=crop
(Barbershop vintage)
```

### Services Icons
- Corte: `https://images.unsplash.com/photo-1503387762996-74f5f009631e?w=400&h=300&fit=crop`
- Barba: `https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=300&fit=crop`
- Styling: `https://images.unsplash.com/photo-1562005555-c89fcb1e67c0?w=400&h=300&fit=crop`

### Gallery Images
```
https://images.unsplash.com/photo-1585747860715-cd4628902d4a?w=500&h=400&fit=crop
https://images.unsplash.com/photo-1503387762996-74f5f009631e?w=500&h=400&fit=crop
https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=500&h=400&fit=crop
https://images.unsplash.com/photo-1562005555-c89fcb1e67c0?w=500&h=400&fit=crop
```

### Team/Professionals
```
https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop
https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop
https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop
https://images.unsplash.com/photo-1519345291346-1f6a18511dad?w=300&h=300&fit=crop
```

---

## Salon Template

### Hero Background
```
https://images.unsplash.com/photo-1576126213369-97a306d36557?w=1200&h=600&fit=crop
(Salon/spa feminine)
```

### Services Icons
- Manicure: `https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop`
- Pedicure: `https://images.unsplash.com/photo-1552087405-20bcad00228b?w=400&h=300&fit=crop`
- Hair: `https://images.unsplash.com/photo-1563212388-319f694cab57?w=400&h=300&fit=crop`
- Massage: `https://images.unsplash.com/photo-1544161515-81e8b1dd2a4f?w=400&h=300&fit=crop`

### Portfolio/Gallery (Nails & Beauty)
```
https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop
https://images.unsplash.com/photo-1552087405-20bcad00228b?w=500&h=400&fit=crop
https://images.unsplash.com/photo-1563212388-319f694cab57?w=500&h=400&fit=crop
https://images.unsplash.com/photo-1522929084246-ce4e7b7f6718?w=500&h=400&fit=crop
```

### Specialists (Women)
```
https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop
https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop
https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop
https://images.unsplash.com/photo-1517046913197-7d4c28c8e91b?w=300&h=300&fit=crop
```

---

## Como integrar:

Usa estas URLs nos componentes (substitui os placeholders atuais):
- `app/page.tsx`
- `components/Hero.tsx`
- `components/Gallery.tsx`
- `components/Team.tsx`
- `components/Services.tsx`

Exemplo:
```jsx
<img 
  src="https://images.unsplash.com/photo-1585747860715-cd4628902d4a?w=1200&h=600&fit=crop"
  alt="Barbershop"
  className="w-full h-full object-cover"
/>
```

**Nota:** Todas as imagens são **Unsplash (Creative Commons Zero)** — pode usar livremente em projetos comerciais!
