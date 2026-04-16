# Marco Montilla — Personal Portfolio

> **Live demo:** [marcomontilla.dev](https://marcomontilla.dev) *(deploy link — update once hosted)*
> **Contact:** [contact.marco@proton.me](mailto:contact.marco@proton.me)

A production-quality personal portfolio built with a modern frontend-first stack. Designed to function as both a professional showcase and a live demonstration of frontend engineering — clean component architecture, smooth UX, zero unnecessary complexity.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Architecture & Design Decisions](#architecture--design-decisions)
4. [Project Structure](#project-structure)
5. [Component System](#component-system)
6. [Custom Hooks](#custom-hooks)
7. [Data Layer](#data-layer)
8. [Design System](#design-system)
9. [Pages & Sections](#pages--sections)
10. [Contact Form](#contact-form)
11. [Performance](#performance)
12. [Getting Started](#getting-started)
13. [Deployment](#deployment)
14. [Updating Content](#updating-content)

---

## Overview

This portfolio was built with three principles:

- **Frontend-first, no overengineering** — No backend, no database, no unnecessary infrastructure. A contact form via [Formspree](https://formspree.io) is the only external dependency beyond the UI layer.
- **Production code quality** — Typed data layer, reusable component primitives, custom hooks, clean separation of concerns. Structured the way a real product would be.
- **Intentional design** — Glass morphism aesthetic with a cold indigo/violet palette, smooth scroll animations, dark/light mode with no flash, and a responsive layout that works at every breakpoint.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **UI Framework** | React | 18.3 | Component model |
| **Build Tool** | Vite | 5.4 | Dev server + bundler |
| **Language** | TypeScript | 5.5 | Full type safety |
| **Styling** | Tailwind CSS | 3.4 | Utility-first CSS |
| **Animation** | Framer Motion | 11.3 | Hero animations |
| **Icons** | Lucide React | 0.441 | Consistent icon set |
| **Forms** | Formspree | — | Serverless form handling |

**Why no backend?**
The portfolio is entirely static content. A FastAPI backend would add infrastructure cost and complexity for zero functional gain. Formspree handles form submission on the free tier — no server needed.

**Why no database?**
Content is sourced from `src/data/resume.ts` — a typed, version-controlled data file. This is the right call for a portfolio: content changes are code changes, and they're tracked in git.

---

## Architecture & Design Decisions

### Component hierarchy

The component tree is intentionally flat and layered:

```
App
├── Navbar          (layout — sticky, scroll-aware, glass)
├── Hero            (section)
├── About           (section)
├── Skills          (section)
├── Experience      (section)
├── Projects        (section)
├── Contact         (section)
└── Footer          (layout)
```

Sections are composed from a shared set of UI primitives (`Button`, `Badge`, `GlassCard`, `AnimatedSection`, `SectionHeader`), keeping visual consistency effortless and changes local.

### State management

No global state library. All state is local to the component that owns it:
- `useTheme` — manages dark/light mode via `localStorage` + DOM class
- `useScrollSpy` — derives active nav section from scroll position
- `useCounter` — drives the animated stat counters in the Hero
- `useInView` — triggers scroll animations via `IntersectionObserver`

### No React Router

Scroll-based single-page navigation. All sections are rendered on one page; the navbar highlights the active section using `IntersectionObserver`. This is the right pattern for a portfolio — simpler, no route state to manage, and better for SEO with a single URL.

### Theme implementation

Dark mode is applied via a `class` on `<html>`, driven by Tailwind's `darkMode: 'class'` config. The class is applied **before the first render** in `main.tsx` to eliminate flash of unstyled content (FOUC):

```ts
// main.tsx — runs before React mounts
const theme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (theme === 'dark' || (!theme && prefersDark)) {
  document.documentElement.classList.add('dark')
}
```

The `useTheme` hook then stays in sync and persists preference changes to `localStorage`.

---

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg               # SVG favicon with gradient M monogram
│
├── src/
│   ├── components/
│   │   ├── ui/                   # Reusable primitive components
│   │   │   ├── AnimatedSection.tsx   # Scroll-triggered fade/slide wrapper
│   │   │   ├── Badge.tsx             # Status/tag badges (5 variants)
│   │   │   ├── Button.tsx            # Multi-variant button (4 variants)
│   │   │   ├── GlassCard.tsx         # Glass morphism card container
│   │   │   └── SectionHeader.tsx     # Consistent section heading block
│   │   │
│   │   ├── layout/               # App-level layout components
│   │   │   ├── Navbar.tsx            # Sticky nav with scroll-spy & mobile drawer
│   │   │   └── Footer.tsx            # Minimal footer with social links
│   │   │
│   │   └── sections/             # Full-page content sections
│   │       ├── Hero.tsx              # Full-viewport intro with terminal card
│   │       ├── About.tsx             # Bio, strengths, quick facts
│   │       ├── Skills.tsx            # Categorized skill grid
│   │       ├── Experience.tsx        # Expandable job history timeline
│   │       ├── Projects.tsx          # Under construction + project previews
│   │       └── Contact.tsx           # Formspree-connected contact form
│   │
│   ├── data/
│   │   └── resume.ts             # Single source of truth for all CV content
│   │
│   ├── hooks/
│   │   ├── useTheme.ts           # Dark/light mode toggle with persistence
│   │   ├── useScrollSpy.ts       # Active section detection via scroll position
│   │   ├── useCounter.ts         # Animated number counter (RAF-based)
│   │   └── useInView.ts          # IntersectionObserver visibility hook
│   │
│   ├── types/
│   │   └── index.ts              # Shared TypeScript interfaces
│   │
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point + theme pre-initialization
│   └── index.css                 # Tailwind layers + custom utilities
│
├── index.html                    # HTML shell with font preloads
├── tailwind.config.ts            # Extended theme tokens
├── vite.config.ts                # Path aliases + React plugin
├── tsconfig.json                 # Strict TypeScript config
└── package.json
```

---

## Component System

All primitives live in `src/components/ui/` and are designed to be composed, not extended.

### `Button`

Four variants, three sizes, supports rendering as an `<a>` tag.

```tsx
<Button variant="primary" size="lg">View my work</Button>
<Button variant="secondary">Get in touch</Button>
<Button variant="outline" size="sm">Learn more</Button>
<Button variant="ghost">Cancel</Button>

// As anchor
<Button as="a" href="https://..." target="_blank">GitHub</Button>
```

| Variant | Use case |
|---|---|
| `primary` | Main CTA — indigo-to-violet gradient |
| `secondary` | Secondary CTA — glass style |
| `outline` | Tertiary action — indigo border |
| `ghost` | Inline/nav actions — no background |

### `Badge`

Inline labels for status indicators, tech tags, and metadata.

```tsx
<Badge variant="success">Current</Badge>
<Badge variant="indigo">FastAPI</Badge>
<Badge variant="mono">SQL Server</Badge>
<Badge variant="violet">Planned</Badge>
```

### `GlassCard`

Thin wrapper around `BorderGlowCard`. Applies `className` to the inner content container.

```tsx
<GlassCard className="p-6">Content with padding</GlassCard>
<GlassCardStrong className="p-8">Higher blur/opacity variant</GlassCardStrong>
```

### `BorderGlowCard`

The core interactive card primitive. Tracks cursor position and renders a directional glow on the nearest edge — adapted from [ReactBits BorderGlow](https://reactbits.dev/components/border-glow) with our indigo/violet/blue palette and glass backdrop-filter.

```tsx
<BorderGlowCard
  glowColor="239 84 67"        // HSL triplet (indigo default)
  colors={['#818cf8', '#a78bfa', '#60a5fa']}  // mesh gradient
  glowIntensity={1.0}
  fillOpacity={0.35}
  animated                     // one-shot sweep on mount
>
  content
</BorderGlowCard>
```

| Prop | Default | Description |
|---|---|---|
| `glowColor` | `'239 84 67'` | HSL triplet for the edge glow |
| `colors` | indigo/violet/blue | Mesh gradient fill colors |
| `glowIntensity` | `1.0` | Glow brightness multiplier |
| `fillOpacity` | `0.35` | Interior mesh fill opacity |
| `glowRadius` | `36` | Outer glow spread in px |
| `animated` | `false` | Trigger sweep animation on mount |

### `AnimatedSection`

Wraps any block and animates it in when it enters the viewport. Uses `IntersectionObserver` — no scroll event listeners.

```tsx
<AnimatedSection delay={200} direction="up">
  <YourContent />
</AnimatedSection>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `direction` | `up \| down \| left \| right \| fade` | `up` | Entrance direction |
| `delay` | `number` (ms) | `0` | Animation start delay |
| `threshold` | `number` | `0.1` | Intersection ratio to trigger |

### `SectionHeader`

Consistent section heading pattern used across all sections.

```tsx
<SectionHeader
  eyebrow="Experience"
  title="Where I've built"
  titleAccent="real systems."
  description="Optional subtitle text."
  centered={false}
/>
```

---

## Custom Hooks

### `useTheme`

Manages dark/light mode. Reads from `localStorage`, falls back to `prefers-color-scheme`, and applies the `dark` class to `<html>`.

```ts
const { theme, toggle, isDark } = useTheme()
```

### `useScrollSpy`

Takes an array of section IDs and returns the currently visible one based on scroll position. Used by the Navbar to highlight the active link.

```ts
const activeSection = useScrollSpy(['home', 'about', 'skills', 'experience'])
```

### `useCounter`

Animates a number from 0 to `target` using `requestAnimationFrame` with an ease-out-cubic curve. Used for the stat counters in the Hero section.

```ts
const count = useCounter(500, 1800, isVisible) // target, duration(ms), start trigger
```

### `useInView`

Lightweight `IntersectionObserver` hook. Returns a `ref` and `inView` boolean.

```ts
const { ref, inView } = useInView(0.15, true) // threshold, once
```

---

## Data Layer

All content lives in `src/data/resume.ts`. This is the **single source of truth** — updating the portfolio means updating this file, nowhere else.

### Structure

```ts
personal      // Name, title, tagline, email, GitHub, LinkedIn, location
stats         // Hero stat counters (years, subscribers, etc.)
skills        // Categorized skill groups with icons and tags
experience    // Full job history with highlights and tech tags
education     // Degree and institution
strengths     // Technical strength bullets for the About section
navLinks      // Navigation link definitions
```

### Example: adding a skill

```ts
// src/data/resume.ts
{
  category: 'New Category',
  icon: 'Server',           // Must match a key in Skills.tsx iconMap
  description: 'Short description',
  items: ['Item 1', 'Item 2'],
}
```

### Example: adding a job

```ts
{
  title: 'Role Title',
  company: 'Company Name',
  location: 'City, ST',
  period: '2024 – Present',
  current: true,
  description: 'One-line role description.',
  highlights: ['Bullet 1', 'Bullet 2'],
  tags: ['PHP', 'PostgreSQL'],
}
```

---

## Design System

### Color palette

| Token | Light | Dark | Use |
|---|---|---|---|
| Background | `slate-50` | `#070c18` | Page background |
| Surface | `white` | `#0d1426` | Card backgrounds |
| Accent | `indigo-600` | `indigo-400` | Interactive + headings |
| Accent 2 | `violet-600` | `violet-400` | Gradient partner |
| Muted text | `slate-500` | `slate-400` | Descriptions |

### Glass morphism recipe

```css
/* Dark */
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.07);

/* Light */
background: rgba(255, 255, 255, 0.70);
backdrop-filter: blur(24px);
border: 1px solid rgba(148, 163, 184, 0.40);
```

Applied via the `.glass` utility class defined in `index.css`.

### Typography

| Role | Font | Weight |
|---|---|---|
| Body, UI | Inter | 300 – 700 |
| Headings | Inter | 800 – 900 |
| Code, mono accents | JetBrains Mono | 400 – 600 |

### Animation principles

- Scroll animations: CSS `opacity` + `transform`, triggered by `IntersectionObserver`. No JS animation libraries.
- Stat counters: `requestAnimationFrame` loop with ease-out-cubic easing.
- Hover states: CSS transitions (`duration-200`, `duration-300`), `translate-y-0.5` lift.
- Background orbs: CSS `animation: float` keyframes with staggered delays.
- No animation runs on mount unless the element is in the viewport.

---

## Pages & Sections

### Hero

Full-viewport intro. Left column: name, title, tagline, CTA buttons, social links. Right column: interactive terminal card showing key stats, animated counter grid.

The terminal card is a styled `div` — no terminal library — built to feel like a real CLI output with a blinking cursor.

Stats animate from 0 on page load using `useCounter` with staggered delays.

### About

Two-column layout. Main column: professional bio written from CV content. Sidebar: Technical Strengths list, Quick Facts card with monospace badges.

### Skills

Six glass cards arranged in a responsive grid (1 → 2 → 3 columns). Each card has a category icon, description, and skill tags. Cards are color-coded by domain (blue for languages, indigo for backend, violet for databases, etc.).

### Experience

Expandable accordion-style cards. The current role is open by default; past roles are collapsed. Each card shows company, role, date range, location, a one-line description, a bullet list of highlights, and tech tags.

A sticky sidebar on desktop shows education and a GitHub link.

### Projects

Polished "Under Construction" state. Explains why (enterprise work is proprietary), shows a grid of real/planned project cards with status badges (`Live`, `Proprietary`, `Planned`), and links to GitHub.

### Contact

Split layout: contact info on the left (email, GitHub, LinkedIn, location + availability note), Formspree-connected form on the right. Handles `sending`, `success`, and `error` states explicitly.

---

## Contact Form

The form POSTs to [Formspree](https://formspree.io) — a serverless form backend. No server, no backend code.

**Endpoint:** `https://formspree.io/f/xdayegod`

**Fields:** Name, Email, Subject, Message

**States handled:**
- `idle` — default form view
- `sending` — spinner on submit button, form locked
- `success` — confirmation message with "Send another" reset link
- `error` — inline error banner with fallback mailto link

**First submission note:** Formspree sends a confirmation email the first time a message is received. Click the link in that email to verify your account. All subsequent submissions go straight to your inbox.

---

## Performance

Production bundle (Vite build output):

| Asset | Size | Gzipped |
|---|---|---|
| `index.html` | 1.27 kB | 0.62 kB |
| `index.css` | 39.85 kB | 6.98 kB |
| `index.js` | 204.13 kB | 61.20 kB |

- No images — all visuals are CSS (gradients, orbs, dot grid)
- Scroll animations use `IntersectionObserver`, not scroll event listeners
- Google Fonts loaded with `rel="preconnect"` and `display=swap`
- No global state library, no router, no unused dependencies
- TypeScript strict mode — no implicit `any`, no unused variables

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
git clone https://github.com/marcomontilla/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
# → http://localhost:5173
```

### Production build

```bash
npm run build       # TypeScript check + Vite bundle → dist/
npm run preview     # Preview the production build locally
```

---

## Deployment

This is a pure static site — deploy anywhere that serves static files.

**Recommended options (all free):**

| Platform | Steps |
|---|---|
| **Vercel** | Connect GitHub repo → auto-deploys on push. Zero config needed. |
| **Netlify** | Drag `dist/` folder to Netlify drop, or connect GitHub. |
| **GitHub Pages** | Push `dist/` to `gh-pages` branch, or use the `vite-plugin-gh-pages` package. |
| **Cloudflare Pages** | Connect GitHub → build command: `npm run build`, output dir: `dist`. |

**Vercel (fastest path):**

```bash
npm i -g vercel
vercel --prod
```

---

## Updating Content

All content is in one file: **`src/data/resume.ts`**

| What to update | Where |
|---|---|
| Name, title, tagline, email, social links | `personal` object |
| Hero stat counters | `stats` array |
| Skill categories and tags | `skills` array |
| Work history | `experience` array |
| Education | `education` object |
| About page bullet points | `strengths` array |

No other files need to change for content updates.

---

## License

Personal portfolio — not licensed for reuse of design or content. Code structure may be used as reference.

---

*Built by Marco Montilla · Atlanta, GA · [contact.marco@proton.me](mailto:contact.marco@proton.me)*
