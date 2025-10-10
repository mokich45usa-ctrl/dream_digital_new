# DREAM DIGITAL Motion System

## Overview
A unified scroll-triggered animation system with consistent timing and rhythm. All animations respect `prefers-reduced-motion` for accessibility.

---

## Motion Tokens

### Section Reveal
**Usage:** Entire section containers, major content blocks

| Token | Value | Description |
|-------|-------|-------------|
| `--motion-section-duration` | 0.42s | Animation duration |
| `--motion-section-translate-y` | 12px | Vertical movement |
| `--motion-section-easing` | cubic-bezier(0.16, 1, 0.3, 1) | Custom easing curve |

**Animation:**
- Opacity: 0 → 1
- Transform: translateY(12px) → translateY(0)
- Duration: 420ms
- Easing: Smooth deceleration

---

### Card Reveal
**Usage:** Individual cards, grid items, content blocks

| Token | Value | Description |
|-------|-------|-------------|
| `--motion-card-duration` | 0.32s | Animation duration |
| `--motion-card-translate-y` | 10px | Vertical movement |
| `--motion-card-easing` | cubic-bezier(0.16, 1, 0.3, 1) | Custom easing curve |

**Animation:**
- Opacity: 0 → 1
- Transform: translateY(10px) → translateY(0)
- Duration: 320ms
- Easing: Smooth deceleration

---

### Card Stagger
**Usage:** Sequential animation of elements within a card

| Token | Value | Description |
|-------|-------|-------------|
| `--motion-stagger-step` | 0.08s | Delay between items |
| `--motion-stagger-icon-delay` | 0s | Icon appears first |
| `--motion-stagger-heading-delay` | 0.08s | Heading follows (+80ms) |
| `--motion-stagger-text-delay` | 0.16s | Text appears last (+160ms) |

**Sequence:**
1. **Icon** - 0ms delay
2. **Heading** - 80ms delay
3. **Text** - 160ms delay

Total stagger duration: ~400ms (card animation + stagger)

---

### Viewport Settings

| Token | Value | Description |
|-------|-------|-------------|
| `--motion-viewport-amount` | 0.15 | 15% of element must be visible |
| `--motion-viewport-margin` | 0px 0px -20% 0px | Early trigger: 20% before bottom |

**Early Trigger Benefits:**
- Animations start before element fully enters viewport
- Smoother user experience
- Content appears "ready" when scrolled into view

---

### Section Rhythm

| Token | Value | Description |
|-------|-------|-------------|
| `--motion-section-gap` | 0.1s | Delay between consecutive sections |

**Purpose:** Maintains consistent visual rhythm when multiple sections animate in sequence.

---

## Components

### MotionReveal
General-purpose reveal component for sections or cards.

```tsx
import { MotionReveal } from './components/ui/motion-reveal';

// Section reveal (12px, 0.42s)
<MotionReveal type="section" delay={0}>
  <section>...</section>
</MotionReveal>

// Card reveal (10px, 0.32s)
<MotionReveal type="card" delay={0.1}>
  <div className="card">...</div>
</MotionReveal>
```

**Props:**
- `type`: `"section"` | `"card"` - Animation preset
- `delay`: `number` - Delay in seconds (default: 0)
- `className`: `string` - Additional CSS classes

---

### SectionReveal
Convenience wrapper for sections (auto-uses section preset).

```tsx
import { SectionReveal } from './components/ui/motion-reveal';

<SectionReveal delay={0}>
  <section className="py-24">
    <h2>Why choose us</h2>
    {/* Content */}
  </section>
</SectionReveal>
```

---

### CardReveal
Card animation with optional internal stagger.

```tsx
import { CardReveal, StaggerItem } from './components/ui/motion-reveal';

// Simple card (no stagger)
<CardReveal delay={0}>
  <div className="card">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</CardReveal>

// Card with stagger (icon → heading → text)
<CardReveal stagger delay={0}>
  <StaggerItem>
    <Icon className="w-8 h-8" /> {/* 0ms */}
  </StaggerItem>
  <StaggerItem>
    <h3>Title</h3> {/* +80ms */}
  </StaggerItem>
  <StaggerItem>
    <p>Description</p> {/* +160ms */}
  </StaggerItem>
</CardReveal>
```

**Props:**
- `stagger`: `boolean` - Enable internal stagger (default: false)
- `delay`: `number` - Delay in seconds (default: 0)
- `className`: `string` - Additional CSS classes

---

### StaggerItem
Individual item within a staggered card.

```tsx
import { StaggerItem } from './components/ui/motion-reveal';

<StaggerItem>
  <div className="icon-wrapper">
    <Icon />
  </div>
</StaggerItem>
```

**Note:** Only works as child of `CardReveal` with `stagger={true}`.

---

## Usage Patterns

### Basic Section
```tsx
<SectionReveal>
  <section className="py-24 bg-surface">
    <div className="container">
      <h2 className="heading-section">Section Title</h2>
      <p className="text-center">Description</p>
    </div>
  </section>
</SectionReveal>
```

---

### Grid of Cards
```tsx
<SectionReveal>
  <section className="py-24">
    <h2 className="heading-section">Features</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <CardReveal key={index} delay={index * 0.1}>
          <div className="card p-6">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </CardReveal>
      ))}
    </div>
  </section>
</SectionReveal>
```

**Stagger Pattern:**
- Card 1: 0ms delay
- Card 2: 100ms delay
- Card 3: 200ms delay

Total animation time: ~620ms (320ms animation + 200ms stagger + 100ms buffer)

---

### Card with Internal Stagger
```tsx
<CardReveal stagger delay={0}>
  <div className="bg-card p-8 rounded-large shadow-soft">
    {/* Icon - appears first (0ms) */}
    <StaggerItem>
      <div className="w-12 h-12 rounded-full bg-brand-8 flex items-center justify-center mb-4">
        <Sparkles className="w-6 h-6 text-brand" />
      </div>
    </StaggerItem>
    
    {/* Heading - appears second (+80ms) */}
    <StaggerItem>
      <h3 className="heading-sub mb-2">
        We overdeliver
      </h3>
    </StaggerItem>
    
    {/* Text - appears last (+160ms) */}
    <StaggerItem>
      <p className="text-muted-foreground">
        You get more polish, structure, and care than expected.
      </p>
    </StaggerItem>
  </div>
</CardReveal>
```

---

### Sequential Sections
```tsx
<>
  <SectionReveal delay={0}>
    <Hero />
  </SectionReveal>
  
  <SectionReveal delay={0.1}>
    <TrustStrip />
  </SectionReveal>
  
  <SectionReveal delay={0.2}>
    <PainPoints />
  </SectionReveal>
</>
```

**Rhythm:** Each section waits 100ms after previous section starts animating.

---

## Viewport Configuration

### Intersection Observer Settings

```tsx
useInView(ref, {
  once: true,              // Animate only once
  amount: 0.15,            // 15% visibility triggers animation
  margin: "0px 0px -20% 0px"  // Early trigger: 20% from bottom
})
```

**Margin Explanation:**
- `0px 0px -20% 0px` = Top Right Bottom Left
- Negative bottom margin (-20%) triggers animation earlier
- Element animates when 80% scrolled into viewport (instead of 100%)

---

## Accessibility: prefers-reduced-motion

### Auto-Detection
All motion components automatically respect user preferences.

### CSS Override
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  :root {
    --motion-section-duration: 0s;
    --motion-card-duration: 0s;
    --motion-section-translate-y: 0px;
    --motion-card-translate-y: 0px;
  }
}
```

**Result:**
- All animations instantly complete
- No motion sickness risk
- Content immediately visible
- Maintains layout (no translateY)

---

## Animation Timing Breakdown

### Section Animation
```
Duration: 420ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)

0ms ────────────────────────────────────── 420ms
Opacity: 0 ──────────────────────────────► 1
TranslateY: 12px ────────────────────────► 0px
```

### Card Animation
```
Duration: 320ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)

0ms ───────────────────────────── 320ms
Opacity: 0 ─────────────────────► 1
TranslateY: 10px ───────────────► 0px
```

### Card Stagger Sequence
```
Icon:     0ms ──────────── 280ms (appears)
Heading:      80ms ──────────── 360ms (appears)
Text:             160ms ──────────── 440ms (appears)

Total: ~440ms for all elements to appear
```

---

## Performance Considerations

### Optimizations
1. **`once: true`** - Animations run only once, not on every scroll
2. **`will-change: transform, opacity`** - Auto-applied by Motion
3. **GPU acceleration** - Transform and opacity are GPU-accelerated
4. **Intersection Observer** - Efficient scroll detection (native browser API)
5. **Early trigger** - Animations complete before user sees element

### Best Practices
- Use `delay` sparingly (max 3-4 items in sequence)
- Avoid animating too many cards simultaneously (max ~12)
- Keep stagger steps short (0.08s is optimal)
- Test on low-end devices

---

## Migration Guide

### Before (Manual Motion)
```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <Section />
</motion.div>
```

### After (System Tokens)
```tsx
import { SectionReveal } from './components/ui/motion-reveal';

<SectionReveal>
  <Section />
</SectionReveal>
```

**Benefits:**
- Consistent timing across all sections
- Auto-respects reduced motion
- Early trigger for smoother UX
- Less boilerplate code

---

## Design Principles

### 1. Subtle Over Spectacular
- 12px/10px movement is barely noticeable but adds polish
- 0.32s-0.42s feels natural, not jarring
- Smooth easing curve (no bounce)

### 2. Unified Rhythm
- All sections use same easing curve
- 0.1s gap between sections creates flow
- Stagger steps are consistent (0.08s)

### 3. Early Trigger
- 20% early trigger prevents "pop-in" effect
- Content feels ready when scrolled into view
- Better perceived performance

### 4. Accessibility First
- `prefers-reduced-motion` is mandatory
- No motion = instant appearance
- Layout never shifts (translateY becomes 0)

### 5. Performance Conscious
- Animations run once (`once: true`)
- GPU-accelerated properties only
- Minimal JavaScript overhead

---

## Quick Reference

### Component Comparison

| Component | Type | Duration | Movement | Stagger | Use Case |
|-----------|------|----------|----------|---------|----------|
| `SectionReveal` | Section | 420ms | 12px | No | Full sections |
| `MotionReveal` | Custom | 320-420ms | 10-12px | No | Flexible |
| `CardReveal` | Card | 320ms | 10px | Optional | Cards, grid items |
| `StaggerItem` | Child | 280ms | 8px | Yes | Card children |

### Timing Reference

```css
/* Tokens */
--motion-section-duration: 0.42s;
--motion-card-duration: 0.32s;
--motion-stagger-step: 0.08s;
--motion-viewport-amount: 0.15;
--motion-viewport-margin: 0px 0px -20% 0px;

/* Easing */
cubic-bezier(0.16, 1, 0.3, 1)
```

---

## Testing Checklist

- [ ] Sections animate on scroll
- [ ] Cards reveal smoothly
- [ ] Stagger sequence works (icon → heading → text)
- [ ] Early trigger activates before element fully visible
- [ ] Animations run only once (not on scroll up)
- [ ] `prefers-reduced-motion` disables all animations
- [ ] No layout shift during animation
- [ ] Smooth on low-end devices
- [ ] Works in all modern browsers
- [ ] No animation jank or stuttering

---

## Common Issues

### Animation doesn't trigger
- Check `amount: 0.15` - element might not be visible enough
- Verify element is in viewport
- Ensure `once: true` hasn't already fired

### Stagger not working
- Confirm `stagger={true}` on parent `CardReveal`
- Wrap children in `<StaggerItem>`
- Check all children are direct descendants

### Reduced motion not working
- Verify browser settings: System Preferences → Accessibility
- Test with Chrome DevTools: Rendering → Emulate CSS media
- Check CSS override is present

### Performance issues
- Reduce number of simultaneous animations
- Increase `delay` between cards
- Remove stagger if too many items
- Test on target devices

---

## Future Enhancements

**Potential additions:**
1. Horizontal reveal (translateX)
2. Scale reveal (scale 0.95 → 1)
3. Blur reveal (filter: blur)
4. Parallax scroll effects
5. Exit animations (scroll out)

**Cautions:**
- Keep system simple and predictable
- Don't add effects without clear benefit
- Always respect reduced motion
- Test performance thoroughly
