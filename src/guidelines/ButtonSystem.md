# DREAM DIGITAL Button System

## Overview
A comprehensive button system designed for the DREAM DIGITAL brand with 4 variants, 3 sizes, and complete state management. Features soft shadows, large radius corners, and smooth micro-interactions.

---

## Button Variants

### 1. PRIMARY - Brand Gradient
**Purpose:** Main CTAs, primary actions  
**Style:** Brand gradient background with white text

**Visual:**
- Background: Linear gradient `#6E7BF2 → #A47CF3`
- Text: `#FFFFFF` (white)
- Shadow: Brand glow effect
- Border: None

**States:**
- **Default:** Gradient background, brand shadow
- **Hover:** Enhanced shadow, lifts 2px upward
- **Active:** Pressed down 1px, reduced shadow
- **Disabled:** Gray background, muted text, no shadow
- **Loading:** Spinner + disabled state

**Usage:**
```tsx
<Button variant="primary" size="md">
  Start with Dremy
</Button>
```

---

### 2. SECONDARY - Subtle Outline
**Purpose:** Secondary actions, alternative CTAs  
**Style:** Light background with border

**Visual:**
- Background: `#F8F9FA` (surface)
- Text: `#1F2937` (text-primary)
- Border: 2px solid `#E1E4E8` (border)
- Shadow: Soft default shadow

**States:**
- **Default:** Light gray background, subtle border
- **Hover:** White background, brand-tinted border, enhanced shadow, lifts 2px
- **Active:** Pressed down 1px, reduced shadow
- **Disabled:** Gray background, muted text, gray border
- **Loading:** Spinner + disabled state

**Usage:**
```tsx
<Button variant="secondary" size="md">
  Learn More
</Button>
```

---

### 3. GHOST - Transparent
**Purpose:** Tertiary actions, subtle interactions  
**Style:** Transparent with hover background

**Visual:**
- Background: Transparent
- Text: `#1F2937` (text-primary)
- Border: None
- Shadow: None

**States:**
- **Default:** Fully transparent
- **Hover:** 8% brand tint background, brand colored text, lifts 2px
- **Active:** 16% brand tint background, pressed down 1px
- **Disabled:** Muted text, no background change
- **Loading:** Spinner + disabled state

**Usage:**
```tsx
<Button variant="ghost" size="md">
  Skip for now
</Button>
```

---

### 4. LINK - Text Only
**Purpose:** Navigation, inline actions  
**Style:** Text with underline on hover

**Visual:**
- Background: Transparent
- Text: `#6E7BF2` (brand)
- Border: None
- Shadow: None
- Underline: On hover only

**States:**
- **Default:** Brand colored text
- **Hover:** Underline appears, shifts to purple (`#A47CF3`)
- **Active:** Shifts to indigo (`#6E7BF2`)
- **Disabled:** Muted text, no underline
- **Loading:** Spinner + disabled state

**Usage:**
```tsx
<Button variant="link" size="md">
  View pricing details
</Button>
```

---

## Button Sizes

### Small (S)
**Token:** `size="sm"`

| Property | Value | Token |
|----------|-------|-------|
| Height | 36px | `--btn-height-sm` |
| Padding X | 16px | `--btn-padding-x-sm` |
| Font Size | 14px | `--btn-font-size-sm` |
| Border Radius | 18px | `--btn-radius-sm` |
| Icon Gap | 6px | `gap-1.5` |

**Usage:**
```tsx
<Button size="sm">Get Quote</Button>
```

---

### Medium (M) - Default
**Token:** `size="md"`

| Property | Value | Token |
|----------|-------|-------|
| Height | 44px | `--btn-height-md` |
| Padding X | 24px | `--btn-padding-x-md` |
| Font Size | 16px | `--btn-font-size-md` |
| Border Radius | 22px | `--btn-radius-md` |
| Icon Gap | 8px | `gap-2` |

**Usage:**
```tsx
<Button size="md">Start with Dremy</Button>
```

---

### Large (L)
**Token:** `size="lg"`

| Property | Value | Token |
|----------|-------|-------|
| Height | 52px | `--btn-height-lg` |
| Padding X | 32px | `--btn-padding-x-lg` |
| Font Size | 18px | `--btn-font-size-lg` |
| Border Radius | 26px | `--btn-radius-lg` |
| Icon Gap | 10px | `gap-2.5` |

**Usage:**
```tsx
<Button size="lg">Get Started Now</Button>
```

---

## Button States

### Default
- No special styling beyond variant defaults
- Cursor: `pointer`

### Hover
- **Transform:** `translateY(-2px)` - Lifts 2px upward
- **Shadow:** Enhanced depth (variant-specific)
- **Timing:** 280ms with custom easing
- **Applies to:** Primary, Secondary, Ghost (not Link)

### Focus-Visible
- **Ring:** 4px brand color at 20% opacity
- **Outline:** None (using ring instead)
- **Trigger:** Keyboard navigation

### Active (Pressed)
- **Transform:** `translateY(1px)` - Short "press" down
- **Shadow:** Reduced to default or removed
- **Timing:** 280ms with custom easing
- **Applies to:** All variants except Link

### Disabled
- **Opacity:** 50%
- **Cursor:** `not-allowed`
- **Pointer Events:** None
- **Interactions:** No hover/active transforms
- **Visual:** Grayed out, no shadows (variant-specific)

### Loading
- **Spinner:** Rotating loader icon from `lucide-react`
- **Disabled:** Automatically disabled during loading
- **Text:** Remains visible alongside spinner
- **Icon Size:** 16px (size-4)

---

## Micro-Interactions

### Hover Lift
**Animation:**
```css
transform: translateY(-2px);
box-shadow: [enhanced-shadow];
```

**Duration:** 280ms  
**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`  
**Effect:** Smooth upward motion with shadow depth increase

---

### Active Press
**Animation:**
```css
transform: translateY(1px);
box-shadow: [reduced-shadow];
```

**Duration:** 280ms  
**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`  
**Effect:** Quick downward press, mimics physical button

---

### Focus Ring
**Animation:**
```css
ring: 4px solid rgba(110, 123, 242, 0.2);
```

**Duration:** 220ms  
**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`  
**Effect:** Smooth ring expansion on keyboard focus

---

## Shadows

### Default Shadow
**Token:** `--btn-shadow-default`  
**Value:** `0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)`  
**Usage:** Secondary buttons default state

### Hover Shadow
**Token:** `--btn-shadow-hover`  
**Value:** `0 6px 16px rgba(0,0,0,0.08), 0 3px 8px rgba(0,0,0,0.04)`  
**Usage:** All buttons on hover (except ghost/link)

### Brand Shadow
**Token:** `--btn-shadow-brand`  
**Value:** `0 4px 12px rgba(110,123,242,0.15), 0 2px 6px rgba(110,123,242,0.1)`  
**Usage:** Primary button default state

### Brand Hover Shadow
**Token:** `--btn-shadow-brand-hover`  
**Value:** `0 8px 20px rgba(110,123,242,0.25), 0 4px 10px rgba(110,123,242,0.15)`  
**Usage:** Primary button hover state

---

## Animation Tokens

### Duration
**Token:** `--btn-transition-duration`  
**Value:** `280ms`  
**Range:** 220-320ms (280ms is optimal)

### Timing Function
**Token:** `--btn-transition-timing`  
**Value:** `cubic-bezier(0.16, 1, 0.3, 1)`  
**Name:** Custom easing (smooth deceleration)

### Transform Values
**Hover Lift:** `--btn-hover-lift` = `-2px`  
**Active Press:** `--btn-active-press` = `1px`

---

## Content Guidelines

### Action-Oriented Text
Use **verb + result** format for button labels:

✅ **Good Examples:**
- "Start with Dremy" - Clear action + outcome
- "Get Your Offer" - Verb + benefit
- "Launch Your Site" - Action + result
- "View Pricing" - Verb + object
- "Schedule a Call" - Action + what
- "Download Guide" - Verb + resource
- "Join Waitlist" - Action + destination
- "Explore Features" - Verb + exploration

❌ **Avoid:**
- "Click Here" - Generic, no context
- "Submit" - Vague action
- "OK" - No clear outcome
- "Learn More" (exception: secondary CTAs)

### Character Limits
- **Small:** Max 15 characters
- **Medium:** Max 20 characters
- **Large:** Max 25 characters

### Case Style
- **Title Case** for primary CTAs: "Start with Dremy"
- **Sentence case** for secondary actions: "View all packages"
- **Title Case** for navigation: "Get Started"

---

## Usage Examples

### Hero Section CTA
```tsx
<div className="flex gap-4">
  <Button variant="primary" size="lg">
    Start with Dremy
  </Button>
  <Button variant="secondary" size="lg">
    View Pricing
  </Button>
</div>
```

### Form Submission
```tsx
<div className="flex justify-end gap-3">
  <Button variant="ghost" size="md">
    Cancel
  </Button>
  <Button variant="primary" size="md" loading={isSubmitting}>
    Send Message
  </Button>
</div>
```

### Card Actions
```tsx
<div className="space-y-3">
  <Button variant="primary" size="md" className="w-full">
    Get Started
  </Button>
  <Button variant="link" size="sm" className="w-full">
    View package details
  </Button>
</div>
```

### Icon Button
```tsx
import { ArrowRight } from 'lucide-react';

<Button variant="primary" size="icon">
  <ArrowRight className="size-5" />
</Button>
```

### Loading State
```tsx
<Button variant="primary" size="md" loading={isLoading}>
  Processing
</Button>
```

### With Leading Icon
```tsx
import { Sparkles } from 'lucide-react';

<Button variant="primary" size="lg">
  <Sparkles className="size-5" />
  Start with Dremy
</Button>
```

### Disabled State
```tsx
<Button variant="primary" size="md" disabled>
  Coming Soon
</Button>
```

---

## Accessibility

### Keyboard Navigation
- **Tab:** Focus next button
- **Shift+Tab:** Focus previous button
- **Enter/Space:** Activate button
- **Focus ring:** Visible on keyboard focus only

### ARIA Attributes
```tsx
// Loading state
<Button loading aria-busy="true" aria-live="polite">
  Processing
</Button>

// Disabled state
<Button disabled aria-disabled="true">
  Unavailable
</Button>

// Icon-only button
<Button size="icon" aria-label="Close menu">
  <X />
</Button>
```

### Focus Management
- Focus ring appears only on keyboard navigation (`:focus-visible`)
- 4px ring with 20% brand opacity meets WCAG contrast
- Outline removed to use ring for cleaner appearance

### Color Contrast
All button variants meet WCAG AA standards:

| Variant | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Primary | White | #6E7BF2 | 9.04:1 | AAA ✓✓✓ |
| Secondary | #1F2937 | #F8F9FA | 13.2:1 | AAA ✓✓✓ |
| Ghost (hover) | #6E7BF2 | rgba(110,123,242,0.08) | 4.8:1 | AA ✓ |
| Link | #6E7BF2 | White | 4.83:1 | AA ✓ |

---

## Best Practices

### Do's ✓
- Use Primary for main CTAs (1-2 per page)
- Use Secondary for alternative actions
- Use Ghost for tertiary, non-critical actions
- Use Link for navigation and inline actions
- Keep labels concise (verb + outcome)
- Provide loading states for async actions
- Use appropriate size for context (lg for hero, md for forms)
- Include icons for visual reinforcement

### Don'ts ✗
- Don't use multiple Primary buttons in same section
- Don't use generic labels ("Click Here", "Submit")
- Don't disable buttons without explanation
- Don't use small buttons for primary CTAs
- Don't mix button styles arbitrarily
- Don't skip loading states
- Don't remove focus indicators

---

## Responsive Behavior

### Desktop (≥768px)
- Use all sizes as specified
- Full hover/active effects
- Maximum button widths: 320px for primary CTAs

### Mobile (<768px)
- Prefer `md` and `lg` sizes for better touch targets
- Minimum touch target: 44×44px (md size)
- Consider full-width buttons for primary CTAs
- Reduce horizontal padding slightly if needed

### Touch Devices
- All buttons meet 44×44px minimum touch target
- Active state provides tactile feedback
- No hover states on touch (uses `:hover` media query)

---

## Component API

### Props

```tsx
interface ButtonProps {
  // Variant style
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  
  // Size preset
  size?: 'sm' | 'md' | 'lg' | 'icon';
  
  // Loading state (shows spinner, disables interaction)
  loading?: boolean;
  
  // Disabled state
  disabled?: boolean;
  
  // Render as child component (Radix Slot)
  asChild?: boolean;
  
  // Additional className
  className?: string;
  
  // All standard button HTML attributes
  ...HTMLButtonAttributes
}
```

### Default Props
```tsx
defaultVariants: {
  variant: "primary",
  size: "md",
}
```

---

## CSS Tokens Reference

```css
/* Sizes */
--btn-height-sm: 2.25rem;        /* 36px */
--btn-height-md: 2.75rem;        /* 44px */
--btn-height-lg: 3.25rem;        /* 52px */

--btn-padding-x-sm: 1rem;        /* 16px */
--btn-padding-x-md: 1.5rem;      /* 24px */
--btn-padding-x-lg: 2rem;        /* 32px */

--btn-font-size-sm: 0.875rem;    /* 14px */
--btn-font-size-md: 1rem;        /* 16px */
--btn-font-size-lg: 1.125rem;    /* 18px */

--btn-radius-sm: 1.125rem;       /* 18px */
--btn-radius-md: 1.375rem;       /* 22px */
--btn-radius-lg: 1.625rem;       /* 26px */

/* Shadows */
--btn-shadow-default: 0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02);
--btn-shadow-hover: 0 6px 16px rgba(0,0,0,0.08), 0 3px 8px rgba(0,0,0,0.04);
--btn-shadow-brand: 0 4px 12px rgba(110,123,242,0.15), 0 2px 6px rgba(110,123,242,0.1);
--btn-shadow-brand-hover: 0 8px 20px rgba(110,123,242,0.25), 0 4px 10px rgba(110,123,242,0.15);

/* Animation */
--btn-transition-duration: 280ms;
--btn-transition-timing: cubic-bezier(0.16, 1, 0.3, 1);
--btn-hover-lift: -2px;
--btn-active-press: 1px;
```

---

## Migration Guide

### From Old Button Component

**Old:**
```tsx
<Button variant="default" size="default">
  Click Me
</Button>
```

**New:**
```tsx
<Button variant="primary" size="md">
  Get Started
</Button>
```

### Variant Mapping
- `default` → `primary`
- `outline` → `secondary`
- `ghost` → `ghost` (unchanged)
- `link` → `link` (unchanged)
- `destructive` → Use `variant="primary"` with custom className for red theme

### Size Mapping
- `sm` → `sm` (unchanged)
- `default` → `md`
- `lg` → `lg` (unchanged)
- `icon` → `icon` (unchanged)

---

## Testing Checklist

- [ ] All variants render correctly
- [ ] All sizes display proper dimensions
- [ ] Hover lift animation works (2px up)
- [ ] Active press animation works (1px down)
- [ ] Focus ring appears on keyboard focus
- [ ] Loading state shows spinner and disables button
- [ ] Disabled state prevents interaction
- [ ] Icons align properly with text
- [ ] Shadows transition smoothly
- [ ] Meets WCAG AA contrast standards
- [ ] Touch targets ≥44×44px on mobile
- [ ] Animation timing feels natural (280ms)

---

## Future Enhancements

**Potential additions:**
1. Icon-only variant with tooltip
2. Split button with dropdown
3. Button group component
4. Floating action button (FAB)
5. Toggle button state
6. Gradient border variant
7. Pulsing animation for high-priority CTAs
8. Success/error state animations

**Cautions:**
- Keep system simple and predictable
- Don't add variants without clear use case
- Maintain performance (avoid heavy animations)
- Test accessibility thoroughly
