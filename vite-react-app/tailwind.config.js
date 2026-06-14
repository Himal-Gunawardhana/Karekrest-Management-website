/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#38BDF8',
          DEFAULT: '#1A5FD4',
          dark: '#0E3A8C',
        },
        secondary: {
          light: '#1E293B',
          DEFAULT: '#071739',
          dark: '#030B1C',
        },
        teal: {
          DEFAULT: '#00E5FF',
          dark: '#00B8D4',
        },
        amethyst: {
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
        },
        coral: {
          DEFAULT: '#F43F5E',
          dark: '#E11D48',
        },
        emerald: {
          DEFAULT: '#10B981',
          dark: '#059669',
        }
      }
    },
  },
  plugins: [],
}
