# Marco Montilla — Portfolio

Personal portfolio site for Marco Montilla, Lead-Level Backend & Systems Engineer.

**Live:** https://marcomontilla.github.io/marco-montilla-portfolio/

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS (custom Zulia palette) |
| Icons | Lucide React |
| Hosting | GitHub Pages (manual deploy) |

## Features

- **EN / ES language toggle** — full translations in `src/data/translations.ts`
- **Dark / light theme** — FOUC-free; class applied before React mounts
- **Animated scroll sections** — `IntersectionObserver`, fires once per element
- **Interactive glow cards** — cursor-reactive border glow (`BorderGlowCard`)
- **Animated stat counters**, skill grid, experience accordion, project showcase
- **Responsive** — mobile through wide desktop

## Getting Started

```bash
npm install
npm run dev         # http://localhost:5173
npm run build       # tsc check + Vite bundle → dist/
npm run preview     # serve dist/ locally
npx tsc --noEmit    # type-check only
```

## Deployment

Push to `main` does **not** auto-deploy. Deploy is manual:

> GitHub → Actions → **Deploy to GitHub Pages** → Run workflow

Vite base path: `/marco-montilla-portfolio/`

## Content

All site copy (both EN + ES) lives in **`src/data/translations.ts`** — this is the single source of truth for all UI strings, nav links, stats, experience, skills, and strengths.

Static personal info (email, GitHub, LinkedIn, location) lives in `src/data/resume.ts` and is not translated.

## Color Palette — Zulia Flag

Derived from the Zulia state flag (Venezuela):

| Token | Hex | Use |
|---|---|---|
| `zulia-400` | `#0080C8` | Primary accent — blue |
| `gold-400` | `#FFCC00` | Secondary accent — gold |

Visual reference: [palette.html](https://marcomontilla.github.io/marco-montilla-portfolio/palette.html)

When adding new UI elements, use `zulia-*` (not `indigo-*`) and `gold-*` (not `violet-*`).

## Key Files

| File | Purpose |
|---|---|
| `src/data/translations.ts` | All copy EN + ES — edit here first |
| `src/data/resume.ts` | Static personal info |
| `src/contexts/LanguageContext.tsx` | Language state + `useLanguage()` hook |
| `src/main.tsx` | FOUC prevention — theme applied before React mounts |
| `src/components/ui/BorderGlowCard.tsx` | Base interactive card |
| `src/components/ui/GlassCard.tsx` | Palette wrapper around BorderGlowCard |
| `src/components/ui/AnimatedSection.tsx` | Scroll-triggered entrance animations |
| `tailwind.config.ts` | Custom color scales (`zulia-*`, `gold-*`) |
| `.github/workflows/deploy.yml` | Manual GitHub Pages deploy workflow |

---

*Marco Montilla · Atlanta, GA · [contact.marco@proton.me](mailto:contact.marco@proton.me)*
