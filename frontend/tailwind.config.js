/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6fe',
          100: '#ddeafc',
          200: '#c3dbfa',
          300: '#9bc3f6',
          400: '#6ca2f0',
          500: '#4880e7',
          600: '#3263db',
          700: '#264ec4',
          800: '#1b3b9b',
          900: '#0f2766',
          950: '#0a193d',
        },
        navy: {
          800: '#0f1f38',
          900: '#0a1628',
          950: '#060e1a',
        },
        gold: {
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
        },
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#f8fafc',
          muted: '#f1f5f9',
          dark: '#0f172a',
        },
        border: {
          subtle: '#e2e8f0',
          strong: '#cbd5e1',
          dark: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'elevated': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
        'dropdown': '0 10px 30px 0 rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
