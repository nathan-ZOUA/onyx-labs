/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        onyx: {
          bg: '#080A0F',
          secondary: '#10141D',
          card: '#151B27',
          border: '#252B38',
          text: '#F5F5F7',
          muted: '#9CA3AF',
          violet: '#8B5CF6',
          cyan: '#35D9D0',
          lightBg: '#F8F9FC',
          lightCard: '#FFFFFF',
          lightBorder: '#E5E7EB',
          lightText: '#111827',
          lightMuted: '#64748B',
          lightViolet: '#7357E8',
          lightCyan: '#159F94'
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Manrope', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
};
