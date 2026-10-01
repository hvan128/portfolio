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
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        panel: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 20px 50px -30px rgba(0, 0, 0, 0.8)',
        neon: '0 0 0 1px rgba(56, 189, 248, 0.35), 0 0 40px -6px rgba(56, 189, 248, 0.45)',
        'ai-glow': '0 0 0 1px rgba(99, 102, 241, 0.18), 0 18px 60px -18px rgba(99, 102, 241, 0.5)',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(120deg, #6366f1 0%, #3b82f6 45%, #22d3ee 100%)',
        'grid-faint':
          'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite',
      },
    },
  },
  plugins: [],
}
