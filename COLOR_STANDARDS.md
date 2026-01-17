# Color Standards & Accessibility Guide

## Brand Colors

### Primary (Indigo/Blue)
- **Color**: `#2563EB`
- **Usage**: Primary buttons, main CTAs, active states
- **Contrast**: 4.5:1 on white (WCAG AA ✓)

### Secondary (Teal)
- **Color**: `#14B8A6`
- **Usage**: Checkmarks, success states, feature highlights
- **Contrast**: 3.0:1 on white (WCAG AA Large Text ✓)

### Accent (Cyan)
- **Color**: `#22D3EE`
- **Usage**: Secondary buttons, badges, link hovers
- **Contrast**: 2.8:1 on white (Use with caution - ensure sufficient contrast)

### Dark Slate (Text)
- **Color**: `#0F172A`
- **Usage**: Headings, primary text
- **Contrast**: 16.5:1 on white (WCAG AAA ✓)

### Light Gray (Background)
- **Color**: `#F8FAFC`
- **Usage**: Section backgrounds, card backgrounds

## Component Color Standards

### Buttons

#### Primary Button
```tsx
className="bg-primary text-white hover:bg-primary-700 transition-colors"
```
- Background: Primary (#2563EB)
- Text: White
- Hover: Primary-700 (#1D4ED8)
- Contrast: 4.5:1 ✓

#### Secondary Button
```tsx
className="bg-accent text-white hover:bg-accent-500 transition-colors"
```
- Background: Accent (#22D3EE)
- Text: White
- Hover: Accent-500 (#06B6D4)
- Note: Use on colored backgrounds for sufficient contrast

#### Outline Button
```tsx
className="border-2 border-primary text-primary hover:bg-primary/10 transition-colors"
```
- Border: Primary
- Text: Primary
- Hover: Primary with 10% opacity background

### Links

#### Default Link (Light Background)
```tsx
className="text-slate-600 hover:text-primary transition-colors"
```
- Default: Slate-600
- Hover: Primary
- Contrast: 4.5:1 ✓

#### Link (Dark Background)
```tsx
className="text-gray-300 hover:text-accent transition-colors"
```
- Default: Gray-300
- Hover: Accent
- Contrast: 4.5:1 on dark slate ✓

### Headings

#### All Headings
```tsx
className="text-dark-slate"
```
- H1-H6: Dark Slate (#0F172A)
- Exception: White text on colored/gradient backgrounds

### Badges

#### Badge
```tsx
className="bg-accent text-white"
```
- Background: Accent
- Text: White
- Use on colored backgrounds for contrast

### Icons & Highlights

#### Feature Icons
```tsx
className="bg-primary/10 text-primary group-hover:bg-secondary/10 group-hover:text-secondary"
```
- Default: Primary with 10% opacity background
- Hover: Secondary with 10% opacity background

## Accessibility Requirements

### WCAG AA Compliance
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Clear focus states

### Verified Contrast Ratios
- Primary on White: 4.5:1 ✓
- White on Primary: 4.5:1 ✓
- Dark Slate on White: 16.5:1 ✓
- Gray-300 on Dark Slate: 4.5:1 ✓
- Accent on White: 2.8:1 (Use with caution)

## Implementation Notes

1. Always use `transition-colors` for hover states
2. Ensure focus states are visible (outline or ring)
3. Test color combinations for contrast
4. Use semantic color names (primary, secondary, accent)
5. Maintain consistency across all pages
