/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      colors: {
        'wedding-pink': '#F5A9BC',
        'wedding-rose': '#F8C8DC',
        'wedding-blush': '#FADADD',
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        }
      }
    },
  },
  plugins: [],
}
