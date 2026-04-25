/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a0e1a',
        sea: '#0d1b2a',
        gold: '#f4c542',
        'gold-dim': '#e8a020',
        red: '#c0392b',
        parchment: '#f5e6c8',
        'parchment-dark': '#e8d5a3',
        white: '#e8e8e8',
        coral: '#e67e22',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'title': '3.5rem',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
