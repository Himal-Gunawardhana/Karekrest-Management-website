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
          DEFAULT: '#3B82F6',
          dark: '#1E40AF',
        },
        coral: {
          DEFAULT: '#60A5FA',
          dark: '#2563EB',
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
