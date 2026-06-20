/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-lexend)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Keep the existing blue identity — refined into a fuller scale.
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(37, 99, 235, 0.18)',
        'card-hover': '0 12px 40px -12px rgba(37, 99, 235, 0.35), 0 2px 8px rgba(15, 23, 42, 0.06)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.12), 0 18px 50px -18px rgba(37, 99, 235, 0.45)',
        'ai-glow': '0 0 0 1px rgba(99, 102, 241, 0.18), 0 18px 60px -18px rgba(99, 102, 241, 0.5)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
        'ai-gradient': 'linear-gradient(120deg, #6366f1 0%, #3b82f6 45%, #22d3ee 100%)',
        'grid-faint':
          'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
