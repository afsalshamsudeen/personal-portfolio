/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base':   '#080C10',
        'bg-2':      '#0D1117',
        'bg-3':      '#111820',
        'surface-1': '#141C26',
        'surface-2': '#1A2535',
        'blue-a':    '#3B82F6',
        'purple-a':  '#8B5CF6',
        'text-1':    '#F0F6FF',
        'text-2':    '#8892A4',
        'text-3':    '#525D6E',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Menlo', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
        'hero-radial':  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        'blue-shimmer': 'linear-gradient(90deg, transparent, #3B82F6, transparent)',
        'timeline-line':'linear-gradient(to bottom, #3B82F6, #8B5CF6, transparent)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
