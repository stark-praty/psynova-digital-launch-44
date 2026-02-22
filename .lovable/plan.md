

## Fix Hero Theme Toggle and Update CTA Button

### Issue 1: Theme toggle not working on Hero section

The Hero section has a hardcoded dark background via an inline style: `style={{ background: "hsl(240 20% 4%)" }}`. This overrides the CSS variable `--background`, so when the theme switches to light mode, the hero stays dark.

**Fix:** Remove the inline `style` prop from the hero `<section>` element and use `bg-background` (Tailwind class) instead, which respects the theme.

Also, the `ParticleBackground` canvas uses hardcoded `hsla(238, 100%, 51%, ...)` colors. These will look fine on both themes since they're accent colors, but can be adjusted if needed.

### Issue 2: Change WhatsApp button text

The second CTA button in `Hero.tsx` currently reads "WhatsApp Us" with a `MessageCircle` icon. It will be changed to "Let's Build Something Intelligent" with a `Zap` (thunder/lightning) icon from Lucide React.

### Files to modify

**`src/components/Hero.tsx`**
- Line 83: Remove `style={{ background: "hsl(240 20% 4%)" }}` from the section element
- Lines 131-136: Change the second CTA button text from "WhatsApp Us" to "Let's Build Something Intelligent", replace `MessageCircle` icon with `Zap`, and update the link to scroll to the contact section instead of opening WhatsApp

### Technical details

1. Replace the `<section>` tag's inline style with Tailwind's `bg-background` class so it follows the theme.
2. Swap the button content:
   - Old: `<MessageCircle /> WhatsApp Us` linking to `wa.me`
   - New: `<Zap /> Let's Build Something Intelligent` scrolling to the contact section
3. Remove unused `MessageCircle` import if no longer needed.

