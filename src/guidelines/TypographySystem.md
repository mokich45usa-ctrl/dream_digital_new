# DREAM DIGITAL Typography System

## Font Pairing

### Headings: **Manrope** (Modern Geo-Grotesk)
- **Type:** Variable font, geometric sans-serif
- **Character:** Clean, rounded, contemporary
- **Usage:** All headings (H1-H6), titles, labels
- **Why:** Modern minimalist aesthetic with excellent legibility at large sizes

### Body: **Inter** (Humanist Sans)
- **Type:** Variable font, humanist sans-serif  
- **Character:** Neutral, highly readable, open letterforms
- **Usage:** Body text, paragraphs, UI text, forms
- **Why:** Optimized for screen reading with excellent clarity at all sizes

---

## Font Loading

### Google Fonts Import
```css
/* Manrope - Variable font (400-800 weight range) */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&display=swap');

/* Inter - Variable font (400-600 weight range) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400..600&display=swap');
```

### Configuration
- **font-display:** `swap` - Shows fallback font immediately while custom font loads
- **Subsets:** `latin`, `latin-ext` (auto-included by Google Fonts)
- **Weight ranges:**
  - Manrope: 400-800 (Regular to ExtraBold)
  - Inter: 400-600 (Regular to SemiBold)

### Fallback Stack
```css
/* Headings */
--font-heading: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                'Helvetica Neue', Arial, sans-serif;

/* Body */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Helvetica Neue', Arial, sans-serif;

/* Monospace */
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', 
             Consolas, 'Courier New', monospace;
```

---

## Type Scale

### CSS Variables

| Token | Size | px | Usage |
|-------|------|-----|-------|
| `--font-size-h1` | 3.5rem | 56px | Hero headings |
| `--font-size-h2` | 2.75rem | 44px | Section headings |
| `--font-size-h3` | 1.625rem | 26px | Subsection headings |
| `--font-size-h4` | 1.125rem | 18px | Small headings |
| `--font-size-lead` | 1.25rem | 20px | Lead/intro paragraphs |
| `--font-size-body` | 1rem | 16px | Body text (default) |
| `--font-size-small` | 0.875rem | 14px | Captions, labels |
| `--font-size-xs` | 0.75rem | 12px | Fine print, badges |

### Responsive Recommendations

**Desktop (1024px+):**
- Use full scale as specified
- H1: 56px for hero sections

**Tablet (768-1023px):**
- H1: Scale down to 48px (3rem)
- H2: 38px (2.375rem)

**Mobile (< 768px):**
- H1: Scale down to 40px (2.5rem)
- H2: 32px (2rem)
- H3: 24px (1.5rem)

---

## Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-regular` | 400 | Body text, paragraphs |
| `--font-weight-medium` | 500 | Buttons, labels, emphasis |
| `--font-weight-semibold` | 600 | Subheadings, important UI |
| `--font-weight-bold` | 700 | H2, strong emphasis |
| `--font-weight-extrabold` | 800 | H1, hero text |

### Weight Guidelines

**Manrope (Headings):**
- H1: 800 (ExtraBold) - Maximum impact
- H2: 700 (Bold) - Strong presence
- H3-H4: 600 (SemiBold) - Clear hierarchy
- UI labels: 600 (SemiBold)

**Inter (Body):**
- Body text: 400 (Regular) - Optimal readability
- Buttons/Labels: 500 (Medium) - Subtle emphasis
- Strong/Bold: 600 (SemiBold) - Clear emphasis

---

## Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--line-height-none` | 1 | Icons, single-line elements |
| `--line-height-tight` | 1.1 | H1, large display text |
| `--line-height-snug` | 1.3 | H2-H4, compact headings |
| `--line-height-normal` | 1.5 | Default, UI elements |
| `--line-height-relaxed` | 1.6 | Body text, comfortable reading |
| `--line-height-loose` | 1.7 | Long-form content, accessibility |

### Guidelines
- **Headings:** Tighter line-height (1.1-1.3) for visual impact
- **Body text:** Relaxed (1.6) for comfortable reading
- **Small text:** Normal (1.5) to maintain legibility

---

## Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--letter-spacing-tighter` | -0.02em | H1 (56px+) - Tighten large text |
| `--letter-spacing-tight` | -0.01em | H2-H3 (26-44px) |
| `--letter-spacing-normal` | 0 | H4, Body (default) |
| `--letter-spacing-wide` | 0.01em | Small text, captions |
| `--letter-spacing-wider` | 0.02em | Uppercase labels, buttons |

### Guidelines
- **Large headings:** Negative tracking (-0.02em to -0.01em) for visual tightness
- **Body text:** No tracking (0) for natural reading
- **Small text:** Positive tracking (+0.01em) to improve legibility
- **Uppercase:** Always add tracking (+0.02em minimum)

---

## Utility Classes

### Heading Classes

```css
.heading-hero {
  font-family: var(--font-heading);
  font-size: var(--font-size-h1);    /* 56px */
  font-weight: var(--font-weight-extrabold); /* 800 */
  line-height: var(--line-height-tight);     /* 1.1 */
  letter-spacing: var(--letter-spacing-tighter); /* -0.02em */
}

.heading-section {
  font-family: var(--font-heading);
  font-size: var(--font-size-h2);    /* 44px */
  font-weight: var(--font-weight-bold); /* 700 */
  line-height: var(--line-height-snug); /* 1.3 */
  letter-spacing: var(--letter-spacing-tight); /* -0.01em */
}

.heading-sub {
  font-family: var(--font-heading);
  font-size: var(--font-size-h3);    /* 26px */
  font-weight: var(--font-weight-semibold); /* 600 */
  line-height: var(--line-height-snug); /* 1.3 */
  letter-spacing: var(--letter-spacing-tight); /* -0.01em */
}

.heading-small {
  font-family: var(--font-heading);
  font-size: var(--font-size-h4);    /* 18px */
  font-weight: var(--font-weight-semibold); /* 600 */
  line-height: var(--line-height-normal); /* 1.5 */
  letter-spacing: var(--letter-spacing-normal); /* 0 */
}
```

### Text Classes

```css
.text-lead {
  font-family: var(--font-body);
  font-size: var(--font-size-lead);  /* 20px */
  font-weight: var(--font-weight-regular); /* 400 */
  line-height: var(--line-height-normal);  /* 1.5 */
}

.text-body {
  font-family: var(--font-body);
  font-size: var(--font-size-body);  /* 16px */
  font-weight: var(--font-weight-regular); /* 400 */
  line-height: var(--line-height-relaxed); /* 1.6 */
}

.text-small {
  font-family: var(--font-body);
  font-size: var(--font-size-small); /* 14px */
  font-weight: var(--font-weight-regular); /* 400 */
  line-height: var(--line-height-normal);  /* 1.5 */
  letter-spacing: var(--letter-spacing-wide); /* 0.01em */
}

.text-caption {
  font-family: var(--font-body);
  font-size: var(--font-size-xs);    /* 12px */
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: var(--line-height-normal); /* 1.5 */
  letter-spacing: var(--letter-spacing-wide); /* 0.01em */
  text-transform: uppercase;
}
```

---

## Usage Examples

### Hero Section
```html
<div>
  <h1 class="heading-hero text-text-primary">
    Dream Digital
  </h1>
  <p class="text-lead text-text-secondary">
    From dream to live — no calls needed.
  </p>
</div>
```

### Section Heading
```html
<section>
  <h2 class="heading-section">
    Why choose us
  </h2>
  <p class="text-body">
    We built Dream Digital to solve these exact problems.
  </p>
</section>
```

### Card Content
```html
<div class="card">
  <h3 class="heading-sub">Landing Page</h3>
  <p class="text-small text-text-secondary">
    Custom 1-pager focused on conversions
  </p>
  <span class="text-caption">Most popular</span>
</div>
```

### Inline HTML Elements
```html
<p>
  This is <strong>bold text</strong> and this is <em>italic</em>.
  Here's <code>inline code</code> and a <small>small note</small>.
</p>
```

---

## Tailwind Integration

### Direct Font Family Classes
```html
<!-- Use heading font -->
<h2 class="font-[family-name:var(--font-heading)]">Title</h2>

<!-- Use body font -->
<p class="font-[family-name:var(--font-body)]">Text</p>
```

### Font Size Classes (via Tailwind)
```html
<!-- Using custom sizes -->
<h1 class="text-[var(--font-size-h1)]">Hero</h1>
<h2 class="text-[var(--font-size-h2)]">Section</h2>
<p class="text-[var(--font-size-body)]">Body</p>
```

### Font Weight Classes
```html
<h1 class="font-[var(--font-weight-extrabold)]">800 weight</h1>
<h2 class="font-[var(--font-weight-bold)]">700 weight</h2>
<h3 class="font-[var(--font-weight-semibold)]">600 weight</h3>
<p class="font-[var(--font-weight-regular)]">400 weight</p>
```

---

## Font Feature Settings

### Inter OpenType Features
```css
body {
  font-feature-settings: 
    'cv02',  /* Curved r */
    'cv03',  /* Flat-top 3 */
    'cv04',  /* Rounded i, j, l */
    'cv11';  /* Simple single-story a */
}
```

These features improve readability and give Inter a more contemporary look.

### Manrope
No special feature settings required - use default.

---

## Performance Optimization

### Font Loading Strategy
```css
@import url('...')  /* Uses font-display: swap by default */
```

Benefits:
1. **Immediate text display** with fallback font
2. **No FOIT** (Flash of Invisible Text)
3. **Progressive enhancement** - text is always readable

### Variable Font Benefits
- **Single file** for multiple weights
- **Smaller file size** than loading multiple weight files
- **Smooth weight transitions** possible
- **Better performance** on modern browsers

### What's Loaded
**Manrope:**
- Weight range: 400-800 (variable axis)
- Subsets: latin, latin-ext
- Estimated size: ~45-55KB (compressed)

**Inter:**
- Weight range: 400-600 (variable axis)
- Subsets: latin, latin-ext
- Estimated size: ~40-50KB (compressed)

**Total:** ~85-105KB for complete typography system

---

## Accessibility

### WCAG Compliance
- **Minimum text size:** 16px (1rem) for body text ✓
- **Line height:** 1.6 for body text (recommended minimum 1.5) ✓
- **Font weights:** Clear hierarchy with sufficient contrast ✓
- **Letter spacing:** Improved legibility for small text ✓

### Best Practices
1. Never set body text smaller than 16px
2. Use `em` or `rem` units for scalability
3. Maintain 1.6+ line-height for paragraphs
4. Ensure sufficient color contrast (see ColorSystem.md)
5. Test with browser zoom up to 200%

---

## Migration Guide

### From Old System
```css
/* Old */
font-family: system-ui, -apple-system, sans-serif;
font-size: 2.75rem;
font-weight: 700;

/* New */
font-family: var(--font-heading);
font-size: var(--font-size-h2);
font-weight: var(--font-weight-bold);
```

### Legacy Variables (Still Supported)
- `--text-h2` → `--font-size-h2`
- `--text-h3` → `--font-size-h3`
- `--text-h4` → `--font-size-h4`
- `--text-base` → `--font-size-body`
- `--font-weight-medium` → Mapped to 500
- `--font-weight-normal` → Mapped to 400

---

## Design Principles

1. **Hierarchy First:** Use size, weight, and spacing to create clear visual hierarchy
2. **Consistency:** Use utility classes for repeated patterns
3. **Readability:** Optimize line-height and letter-spacing for comfortable reading
4. **Performance:** Variable fonts provide all weights in a single file
5. **Accessibility:** Meet WCAG guidelines for text size and spacing
6. **Minimalism:** Clean, modern aesthetic with Inter + Manrope pairing

---

## Quick Reference

```css
/* Headings: Manrope */
H1: 56px / 800 / 1.1 / -0.02em  (Hero)
H2: 44px / 700 / 1.3 / -0.01em  (Section)
H3: 26px / 600 / 1.3 / -0.01em  (Subsection)
H4: 18px / 600 / 1.5 / 0        (Small)

/* Body: Inter */
Lead: 20px / 400 / 1.5 / 0      (Intro)
Body: 16px / 400 / 1.6 / 0      (Default)
Small: 14px / 400 / 1.5 / 0.01em (Caption)
XS: 12px / 500 / 1.5 / 0.01em    (Fine print)
```

Format: `size / weight / line-height / letter-spacing`
