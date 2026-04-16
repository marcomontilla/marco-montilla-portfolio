import { useMemo } from 'react'

// Deterministic pseudo-random — same result every render, no Math.random() drift
function pr(seed: number): number {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

interface Star {
  x: number
  y: number
  r: number
  opacity: number
  twinkle: boolean
  twinkleDelay: boolean
}

export function StarField({ count = 90 }: { count?: number }) {
  const stars = useMemo<Star[]>(() =>
    Array.from({ length: count }, (_, i) => {
      const rand = (offset: number) => pr(i * 17.3 + offset)
      const size = rand(1)
      return {
        x: rand(2) * 100,
        y: rand(3) * 100,
        r: size > 0.88 ? 1.3 : size > 0.65 ? 0.9 : 0.5,
        opacity: 0.15 + rand(4) * 0.65,
        twinkle: rand(5) > 0.78,
        twinkleDelay: rand(6) > 0.5,
      }
    }),
    [count]
  )

  return (
    // Only visible in dark mode — imperceptible in light mode via opacity
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-0 dark:opacity-100 transition-opacity duration-500"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="white"
          opacity={s.opacity}
          className={
            s.twinkle
              ? s.twinkleDelay
                ? 'animate-twinkle-delayed'
                : 'animate-twinkle'
              : undefined
          }
        />
      ))}
    </svg>
  )
}
