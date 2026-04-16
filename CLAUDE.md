# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (localhost:5173)
npm run build      # tsc type-check then vite build → dist/
npm run preview    # serve the dist/ build locally
npx tsc --noEmit   # type-check only, no output
```

There are no tests and no linter configured.

## Architecture

Single-page React app. All sections render on one page; navigation uses `scrollIntoView`. No router.

**Content source of truth**: `src/data/resume.ts` — all copy, stats, experience, skills, and links live here. Edit this file to update site content; components read from it directly.

**Dark mode**: Applied via `dark` class on `<html>`. Theme is set in `main.tsx` before React mounts (reads `localStorage` + `prefers-color-scheme`) to prevent FOUC. Toggle lives in `Navbar.tsx`.

**Card system**: `BorderGlowCard` (`src/components/ui/BorderGlowCard.tsx`) is the base interactive card from ReactBits. `GlassCard` wraps it with site-palette defaults. Critical constraint: `--card-bg` must be an opaque inline style (not a CSS class) — the `::before` pseudo-element uses it for masking. Semi-transparent backgrounds or `backdrop-filter` break the glow effect.

- `GlassCard` props: `className` → `.border-glow-inner` (content), `outerClassName` → `.border-glow-card` (wrapper). Use `outerClassName="flex-1"` or `outerClassName="h-full"` when cards need to fill a flex/grid container.
- `mix-blend-mode: plus-lighter` (dark) / `screen` (light) — the glow is invisible on light backgrounds unless blend mode is `screen`.

**Scroll animations**: `AnimatedSection` uses `IntersectionObserver` to fade/slide children in on scroll. It renders a plain `div`; pass layout classes (`flex flex-col`, `h-full`) via `className` when the wrapper needs to participate in flex/grid sizing.

**Equal-height cards in grids**: Pattern used throughout — `AnimatedSection` gets `flex flex-col`, `GlassCard` gets `outerClassName="flex-1"`, inner content gets `flex flex-col` with `flex-1` on the growing element (usually the description). Without `outerClassName`, `.border-glow-card` defaults to content height and won't fill a stretched grid cell.

**Deployment**: GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`. Vite `base` is set to `/marco-montilla-portfolio/` in `vite.config.ts`.

## Key files

| File | Purpose |
|------|---------|
| `src/data/resume.ts` | All site content — edit here first |
| `src/components/ui/BorderGlowCard.tsx` | Core card with mouse-tracking glow |
| `src/components/ui/border-glow.css` | CSS for BorderGlowCard — glow, blend modes, animations |
| `src/index.css` | Global styles, `@keyframes`, Tailwind layers |
| `tailwind.config.ts` | Custom colors (`dark.*`, `accent.*`), animations, shadows |
| `src/components/sections/` | One file per page section |
