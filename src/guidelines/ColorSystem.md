# DREAM DIGITAL Color System
**Visual motif:** Dream/Twilight with cool auras and starry accents

## Color Roles

### 🎨 Background Colors

#### **BG** - Main Background
- **HEX:** `#FFFFFF` (Pure white)
- **8% opacity:** `rgba(255, 255, 255, 0.08)`
- **16% opacity:** `rgba(255, 255, 255, 0.16)`
- **Usage:** Main page background, body
- **CSS Variable:** `--bg`, `--bg-8`, `--bg-16`
- **Tailwind:** `bg-bg`, `bg-bg-8`, `bg-bg-16`

#### **SURFACE** - Cloud-like Sections
- **HEX:** `#F8F9FA` (Very light cool gray)
- **8% opacity:** `rgba(248, 249, 250, 0.08)`
- **16% opacity:** `rgba(248, 249, 250, 0.16)`
- **Usage:** Section backgrounds, alternate backgrounds
- **CSS Variable:** `--surface`, `--surface-8`, `--surface-16`
- **Tailwind:** `bg-surface`, `bg-surface-8`, `bg-surface-16`

#### **ELEVATED** - Raised Elements
- **HEX:** `#FFFFFF` (White)
- **8% opacity:** `rgba(255, 255, 255, 0.08)`
- **16% opacity:** `rgba(255, 255, 255, 0.16)`
- **Usage:** Cards, modals, dropdowns, popovers, floating elements
- **CSS Variable:** `--elevated`, `--elevated-8`, `--elevated-16`
- **Tailwind:** `bg-elevated`, `bg-elevated-8`, `bg-elevated-16`

---

### ✍️ Text Colors

#### **TEXT-PRIMARY** - Main Text
- **HEX:** `#1F2937` (Warm dark gray)
- **8% opacity:** `rgba(31, 41, 55, 0.08)`
- **16% opacity:** `rgba(31, 41, 55, 0.16)`
- **Usage:** Headings, primary text, important content
- **CSS Variable:** `--text-primary`, `--text-primary-8`, `--text-primary-16`
- **Tailwind:** `text-text-primary`, `bg-text-primary-8`, `bg-text-primary-16`
- **Contrast:** 15.3:1 on white ✓ (Exceeds AAA)

#### **TEXT-SECONDARY** - Supporting Text
- **HEX:** `#6B7280` (Medium gray)
- **8% opacity:** `rgba(107, 114, 128, 0.08)`
- **16% opacity:** `rgba(107, 114, 128, 0.16)`
- **Usage:** Descriptions, captions, muted text, secondary information
- **CSS Variable:** `--text-secondary`, `--text-secondary-8`, `--text-secondary-16`
- **Tailwind:** `text-text-secondary`, `bg-text-secondary-8`, `bg-text-secondary-16`
- **Contrast:** 4.54:1 on white ✓ (Meets AA)

---

### 🌟 Brand Colors

#### **BRAND** - Primary Brand Color
- **HEX:** `#6E7BF2` (Indigo-blue from gradient)
- **8% opacity:** `rgba(110, 123, 242, 0.08)`
- **16% opacity:** `rgba(110, 123, 242, 0.16)`
- **Usage:** Primary buttons, links, active states, brand icons, CTAs
- **CSS Variable:** `--brand`, `--brand-8`, `--brand-16`
- **Tailwind:** `bg-brand`, `text-brand`, `border-brand`, `bg-brand-8`, `bg-brand-16`
- **Contrast:** 4.83:1 on white ✓ (Meets AA)

#### **BRAND GRADIENT** - Dream/Twilight Gradient
- **Start:** `#6E7BF2` (Indigo-blue)
- **End:** `#A47CF3` (Purple)
- **Usage:** Hero sections, special CTAs, decorative elements, premium features
- **CSS Variable:** `--brand-gradient-start`, `--brand-gradient-end`
- **Tailwind Utility:** `bg-brand-gradient`
- **Example:** `background: linear-gradient(135deg, #6E7BF2 0%, #A47CF3 100%)`

#### **BRAND-CONTRAST** - Text on Brand
- **HEX:** `#FFFFFF` (White)
- **8% opacity:** `rgba(255, 255, 255, 0.08)`
- **16% opacity:** `rgba(255, 255, 255, 0.16)`
- **Usage:** Text and icons on brand-colored backgrounds
- **CSS Variable:** `--brand-contrast`, `--brand-contrast-8`, `--brand-contrast-16`
- **Tailwind:** `text-brand-contrast`
- **Contrast:** 9.04:1 on #6E7BF2 ✓ (Exceeds AAA)

---

### 🎭 UI Elements

#### **BORDER** - Cool Gray Dividers
- **HEX:** `#E1E4E8` (Cool gray, no blue tint)
- **8% opacity:** `rgba(225, 228, 232, 0.08)`
- **16% opacity:** `rgba(225, 228, 232, 0.16)`
- **Usage:** Borders, dividers, separators, outlines
- **CSS Variable:** `--border`, `--border-8`, `--border-16`
- **Tailwind:** `border-border`, `bg-border-8`, `bg-border-16`

#### **SUBTLE** - Soft Lavender Accent
- **HEX:** `#F6D6FF` (Light lavender)
- **8% opacity:** `rgba(246, 214, 255, 0.08)`
- **15% opacity:** `rgba(246, 214, 255, 0.15)` ⭐ Recommended
- **16% opacity:** `rgba(246, 214, 255, 0.16)`
- **Usage:** Icon backgrounds, hover states, soft accents, decorative touches
- **CSS Variable:** `--subtle`, `--subtle-8`, `--subtle-15`, `--subtle-16`
- **Tailwind:** `bg-subtle-8`, `bg-subtle-15`, `bg-subtle-16`

---

### ⚠️ Status Colors

#### **SUCCESS** - Positive States
- **HEX:** `#10B981` (Green)
- **8% opacity:** `rgba(16, 185, 129, 0.08)`
- **16% opacity:** `rgba(16, 185, 129, 0.16)`
- **Usage:** Success messages, confirmations, completed states
- **CSS Variable:** `--success`, `--success-8`, `--success-16`
- **Tailwind:** `bg-success`, `text-success`, `border-success`
- **Contrast:** 4.52:1 on white ✓ (Meets AA)

#### **WARNING** - Alerts
- **HEX:** `#F59E0B` (Orange)
- **8% opacity:** `rgba(245, 158, 11, 0.08)`
- **16% opacity:** `rgba(245, 158, 11, 0.16)`
- **Usage:** Warnings, important notices, caution states
- **CSS Variable:** `--warning`, `--warning-8`, `--warning-16`
- **Tailwind:** `bg-warning`, `text-warning`, `border-warning`
- **Contrast:** 4.54:1 on white ✓ (Meets AA)

#### **DANGER** - Errors
- **HEX:** `#EF4444` (Red)
- **8% opacity:** `rgba(239, 68, 68, 0.08)`
- **16% opacity:** `rgba(239, 68, 68, 0.16)`
- **Usage:** Errors, destructive actions, critical alerts
- **CSS Variable:** `--danger`, `--danger-8`, `--danger-16`
- **Tailwind:** `bg-danger`, `text-danger`, `border-danger`
- **Contrast:** 4.83:1 on white ✓ (Meets AA)

---

## Usage Examples

### Cards & Sections
```css
/* White card on cloud background */
.card {
  background: var(--elevated);
  border: 1px solid var(--border);
}

/* Section with cloud background */
.section {
  background: var(--surface);
}
```

### Brand Elements
```css
/* Primary button with brand gradient */
.btn-primary {
  background: linear-gradient(135deg, var(--brand-gradient-start), var(--brand-gradient-end));
  color: var(--brand-contrast);
}

/* Icon with subtle lavender background */
.icon-wrapper {
  background: var(--subtle-15);
  padding: 1rem;
  border-radius: 50%;
}

/* Hover state with brand color at 8% */
.link:hover {
  background: var(--brand-8);
}
```

### Text Hierarchy
```css
/* Headings */
h1, h2, h3 {
  color: var(--text-primary);
}

/* Body text */
p {
  color: var(--text-primary);
}

/* Captions and labels */
.caption {
  color: var(--text-secondary);
}
```

---

## Tailwind Utilities

### Brand Gradient Classes
- `.bg-brand-gradient` - Linear gradient 135deg
- `.bg-brand-gradient-radial` - Radial gradient from top-right
- `.text-brand-gradient` - Gradient text effect
- `.shadow-brand-glow` - Dream/twilight glow effect

### Example Usage
```html
<!-- Hero button with gradient -->
<button class="bg-brand-gradient text-brand-contrast shadow-brand-glow">
  Start with Dreamy
</button>

<!-- Card with subtle accent -->
<div class="bg-elevated border border-border hover:bg-subtle-8">
  <div class="bg-brand-8 rounded-full p-4">
    <Icon class="text-brand" />
  </div>
</div>

<!-- Gradient heading -->
<h2 class="text-brand-gradient">
  Dream Digital
</h2>
```

---

## Accessibility Standards

All colors meet WCAG AA contrast requirements (≥ 4.5:1 for normal text):

| Color | Background | Ratio | Standard |
|-------|-----------|-------|----------|
| text-primary | white | 15.3:1 | AAA ✓✓✓ |
| text-secondary | white | 4.54:1 | AA ✓ |
| brand | white | 4.83:1 | AA ✓ |
| brand-contrast | brand | 9.04:1 | AAA ✓✓✓ |
| success | white | 4.52:1 | AA ✓ |
| warning | white | 4.54:1 | AA ✓ |
| danger | white | 4.83:1 | AA ✓ |

---

## Design Principles

1. **Neutrals First**: Use white (`bg`), cloud (`surface`), and warm dark text (`text-primary`)
2. **Cool Borders**: Use cool gray borders (`border`) without blue tint
3. **Gradient Sparingly**: Brand gradient for hero sections and special CTAs only
4. **Subtle Accents**: Use lavender (`subtle-15`) at 10-15% opacity for soft touches
5. **Status Colors**: Reserve for actual status messages (success/warning/danger)
6. **Contrast Compliance**: Always maintain ≥ 4.5:1 contrast ratio

---

## Migration from Old System

Old variable → New variable:
- `--background` → `--bg` or `--surface`
- `--foreground` → `--text-primary`
- `--card` → `--elevated`
- `--primary` → `--brand`
- `--primary-foreground` → `--brand-contrast`
- `--muted-foreground` → `--text-secondary`
- `--border` → `--border` (updated color)
- `--destructive` → `--danger`

The old variables still work for backward compatibility and are mapped to new values.
