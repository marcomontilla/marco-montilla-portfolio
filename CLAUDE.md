# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (localhost:5173)
npm run build      # tsc type-check then vite build → dist/
npm run preview    # serve the dist/ build locally
npx tsc --noEmit   # type-check only, no output
```

No tests, no linter configured.

## Architecture

Single-page React app. All sections render on one page; navigation uses `scrollIntoView`. No router.

**Content source of truth**: `src/data/resume.ts` — all copy, stats, experience, skills, and links live here. Edit this file to update site content; components read from it directly.

**Dark mode**: Applied via `dark` class on `<html>`. Theme is initialized in `main.tsx` BEFORE `createRoot()` (reads `localStorage` → fallback to `prefers-color-scheme`) to prevent FOUC. Toggle lives in `Navbar.tsx` and saves to `localStorage`.

---

## Card System — Critical Rules

`BorderGlowCard` (`src/components/ui/BorderGlowCard.tsx`) is the base interactive card ported from ReactBits. `GlassCard` wraps it with site-palette defaults and reactive theme detection.

**`--card-bg` must be an opaque inline style** — the `::before` pseudo-element uses `linear-gradient(var(--card-bg)) padding-box` for masking. Any mismatch (semi-transparent value, CSS class instead of inline) breaks the glow effect. Never use `backdrop-filter` on these cards.

**`GlassCard` props**:
- `className` → `.border-glow-inner` (content container)
- `outerClassName` → `.border-glow-card` (outer wrapper) — use `"flex-1"` or `"h-full"` when the card must fill a grid/flex cell

**Blend modes**: `mix-blend-mode: plus-lighter` in dark mode, `screen` in light mode. The glow is invisible on light backgrounds unless `screen` is used. This is handled in `border-glow.css`.

**Theme reactivity**: Both `GlassCard` and `BorderGlowCard` use a `MutationObserver` watching `document.documentElement` for `class` attribute changes. This means they re-render immediately when the dark class toggles. Do NOT replace this with a static `isDark` snapshot computed outside a hook — it will break theme toggling.

**Light mode card background**: `#ffffff`. Dark mode: `#0d1426`. These are set in both `GlassCard` (explicit prop) and `BorderGlowCard` (reactive fallback).

---

## Equal-Height Cards in Grids

This pattern is used in About, Skills, Experience (highlight row), and Projects. Without it, cards in the same grid row have different heights.

```tsx
// Grid item wrapper
<AnimatedSection className="flex flex-col">
  // Outer card fills the stretched grid cell
  <GlassCard outerClassName="flex-1" className="p-6 flex flex-col">
    <h3>Title</h3>
    // Growing element pushes tags to bottom
    <p className="flex-1">Description</p>
    <div>Tags</div>
  </GlassCard>
</AnimatedSection>
```

CSS Grid stretches `AnimatedSection` (the grid item) to the row height, but `.border-glow-card` inside it won't fill that height unless `outerClassName="flex-1"` is set.

---

## Background / Space Theme

Hero background elements use CSS classes with `.dark` variants (defined in `index.css`) instead of inline styles, so they adapt to both modes:

- `.hero-ambient` — ambient radial gradient (stronger indigo in light, blue-shifted in dark)
- `.hero-orb-blue` / `.hero-orb-purple` — nebula orbs
- `.dot-grid` — indigo-tinted dots in light mode, white at low opacity in dark

`StarField` is `opacity-0 dark:opacity-100` — visible in dark mode only.

---

## Scroll Animations

`AnimatedSection` uses `IntersectionObserver` — fires once when the element enters the viewport, then disconnects. Directions: `up` (default), `down`, `left`, `right`, `fade`.

It renders a plain `div`. Pass layout classes (`flex flex-col`, `h-full`) via `className` when it needs to participate in flex/grid sizing — it does not add any layout of its own.

---

## Public Assets

All paths to files in `public/` must use `import.meta.env.BASE_URL` so they resolve correctly under the GitHub Pages base path (`/marco-montilla-portfolio/`):

```tsx
src={`${import.meta.env.BASE_URL}profile.jpg`}
href={`${import.meta.env.BASE_URL}Marco_Resume.pdf`}
```

`"vite/client"` is in `tsconfig.json` `types` array to support `import.meta.env`.

---

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml` — builds on every push to `main` and deploys to GitHub Pages. Vite `base` is `/marco-montilla-portfolio/` in `vite.config.ts`.

Live URL: `https://marcomontilla.github.io/marco-montilla-portfolio/`

To enable (one-time): repo Settings → Pages → Source → GitHub Actions.

`server.allowedHosts: true` in `vite.config.ts` allows ngrok and any external tunnel for local testing.

---

## Key Files

| File | Purpose |
|------|---------|
| `src/data/resume.ts` | All site content — edit here first |
| `src/main.tsx` | FOUC prevention — theme class applied before React mounts |
| `src/components/ui/BorderGlowCard.tsx` | Base interactive card, reactive theme hook |
| `src/components/ui/border-glow.css` | Glow CSS — blend modes, masking, light/dark variants |
| `src/components/ui/GlassCard.tsx` | Palette wrapper — `className` → inner, `outerClassName` → outer |
| `src/components/ui/AnimatedSection.tsx` | Scroll-triggered fade/slide wrapper |
| `src/index.css` | Global styles, `@keyframes fadeIn`, hero background classes |
| `tailwind.config.ts` | Custom colors (`dark.*`, `accent.*`), animations, shadows |
| `src/components/sections/` | One file per page section |
| `.github/workflows/deploy.yml` | GitHub Pages CI/CD |

---

## Known Gotchas

- **Sticky sidebar** creates blank space as content scrolls past. Prefer a highlight row above the list instead (see Experience section pattern).
- **`AnimatedSection` in a grid** — it IS the grid item. The grid stretches it, but its children won't fill it without explicit `h-full` / `flex-1` on the card wrapper.
- **`fadeIn` keyframe** is defined in `index.css` (not Tailwind config) because Hero uses it via raw `style={{ animation: 'fadeIn ...' }}`. If it's missing, all Hero elements stay invisible at `opacity: 0`.
- **`GlassCardStrong`** in `GlassCard.tsx` also uses the reactive theme hook — keep it in sync if modifying theme detection logic.
