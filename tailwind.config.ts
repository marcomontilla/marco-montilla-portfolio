import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#070c18',
          surface: '#0d1426',
          elevated: '#121b30',
          border: 'rgba(255,255,255,0.07)',
        },
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dim: '#4f46e5',
          violet: '#8b5cf6',
          glow: 'rgba(99,102,241,0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-dark': `
          radial-gradient(at 20% 20%, rgba(99,102,241,0.15) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(139,92,246,0.12) 0px, transparent 50%),
          radial-gradient(at 50% 50%, rgba(59,130,246,0.05) 0px, transparent 70%)
        `,
        'mesh-light': `
          radial-gradient(at 20% 20%, rgba(99,102,241,0.08) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(139,92,246,0.06) 0px, transparent 50%)
        `,
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 2s infinite',
        'float-slow': 'float 12s ease-in-out 4s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'twinkle-delayed': 'twinkle 5s ease-in-out 1.5s infinite',
        'orbit': 'orbit 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-down': 'slideDown 0.25s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'glass': '0 4px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 8px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glow-indigo': '0 0 40px rgba(99,102,241,0.25)',
        'glow-violet': '0 0 40px rgba(139,92,246,0.2)',
        'glow-blue': '0 0 60px rgba(59,130,246,0.3)',
        'photo': '0 0 0 1px rgba(99,102,241,0.3), 0 0 80px rgba(99,102,241,0.2), 0 20px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config
