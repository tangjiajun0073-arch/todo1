# Elena Moreau Photography Portfolio — Agent Guide

This is a premium photography portfolio website with a luxury aesthetic. It's a **single-page HTML file** with embedded CSS and JavaScript—no build process, framework, or external dependencies.

## Architecture

```
index.html          Single-page site (HTML + inline CSS + inline JS)
.claude/            Claude configuration
  settings.local.json   Allows frontend-design skill & bash commands
```

## Design Philosophy

- **Luxury aesthetic**: Sophisticated color palette, serif/sans-serif typography, smooth transitions
- **Performance**: Minimal dependencies, smooth animations, optimized for luxury brands
- **Mobile-first**: Responsive design using CSS `clamp()`, viewport units, and media queries
- **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation

## Key Sections & Patterns

### CSS Variables (Theme System)
```css
--bg-primary: #FCFAF7 (warm white)
--text-primary: #1A1816 (near-black)
--accent: #C25A3C (terracotta-orange)
--accent-warm: #D4A853 (warm gold)
--transition-slow/medium/fast (0.6s / 0.4s / 0.25s cubic-bezier)
```
All colors and animations use CSS variables. Update them in `:root` for site-wide changes.

### Sections
- **Hero**: Full-viewport background image with title, subtitle, scroll indicator. Uses `animation: heroZoom` (1.12x → 1x scale).
- **Gallery**: Multi-column grid with hover overlay effects. Images scale on hover (1.04x).
- **Featured**: Two-column layout (image + text). Accent border styling with pseudo-element positioning.
- **About**: Two-column layout with stats grid (3 columns) and blockquote overlay.
- **Header**: Fixed navigation bar. Toggles `mix-blend-mode` and backdrop blur on scroll via `.scrolled` class.
- **Mobile Menu**: Overlay menu (dark background) with hamburger toggle animation.

### Typography
- **Serif**: `Playfair Display` (headings, display text, luxury accent)
- **Sans-serif**: `DM Sans` (body text, UI elements)
- Both imported from Google Fonts with preconnect hints

### Animations & Transitions
- **Smooth scroll**: `html { scroll-behavior: smooth; }`
- **Fade-up**: `.fadeUp` keyframe (opacity 0 → 1, slight Y offset)
- **Hover effects**: Image zoom, underline expansion, opacity changes
- **Easing**: All use `cubic-bezier(0.25, 0.1, 0.25, 1)` for consistent feel

### Responsive Design
- `clamp(min, preferred, max)` for fluid sizing (headings, padding)
- Mobile menu breakpoint: typically `768px` or lower
- Images: `aspect-ratio` property for consistent scaling
- Use viewport units (`vw`, `vh`) sparingly for critical sections

## Development Guidelines

### Editing CSS
1. **Maintain variable naming**: Keep existing CSS variable names and use them for new colors/transitions
2. **Preserve luxury feel**: Avoid jarring animations; keep easing curves consistent
3. **Test animations**: Use browser DevTools to check 60fps smoothness
4. **Responsive**: Always test changes at mobile (375px), tablet (768px), desktop (1920px) widths

### Adding New Sections
1. Follow the existing grid/layout patterns (2-column grids, centered content max-width ~1400px)
2. Use the accent color (`var(--accent)`) for visual emphasis, warm accent (`var(--accent-warm)`) for secondary highlights
3. Add fade-up animations to text elements for consistency
4. Include proper image aspect ratios (3/4 ratio is common; use `aspect-ratio` property)

### JavaScript Interactions
- Header scroll detection (adds `.scrolled` class)
- Mobile menu hamburger toggle (adds `.active` class to menu and button)
- Smooth scroll behavior built into CSS
- Hover/focus states handled entirely in CSS

### Common Tasks
| Task | Approach |
|------|----------|
| Change primary color | Update `--accent: #C25A3C` in `:root` |
| Adjust animation speed | Modify `--transition-slow/medium/fast` values |
| Add new gallery item | Follow existing `.gallery-item` HTML structure |
| Update hero text | Edit text within `.hero-content` div |
| Disable animations | Set transitions to `0s` or `none` in `:root` |

## Performance Notes
- **No external JS frameworks**: Vanilla JavaScript only
- **No build process**: Edit HTML directly and save
- **Image optimization**: Use compressed JPEGs/WebPs for portfolio images
- **Font loading**: Google Fonts preconnect included; fonts load before DOM parsing

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge 88+)
- Uses: CSS Grid, Flexbox, CSS custom properties, `aspect-ratio`, backdrop-filter
- Mobile: iOS Safari 15+, Chrome Android

## Quick Wins for Agents
- **Typo fixes**: Search and update text directly in HTML
- **Color adjustments**: Change CSS variables in `:root`
- **Add testimonials**: Copy `.gallery-item` structure, adjust content
- **Modify animations**: Adjust `--transition-*` values or `@keyframes`
- **Responsive tweaks**: Update `clamp()` values or add media queries
