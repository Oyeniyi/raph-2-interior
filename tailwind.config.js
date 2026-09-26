/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0a0a0a',
          900: '#121212',
          850: '#181818',
          800: '#1e1e1e',
          700: '#282828',
          600: '#383838',
        },
        gold: {
          100: '#fdf8ea',
          200: '#faefcb',
          300: '#f3dc98',
          400: '#e5c158',
          500: '#D4AF37',
          600: '#C5A059',
          700: '#a37e2e',
          800: '#7f6125',
          900: '#5c451b',
        },
        cream: {
          50: '#fafaf8',
          100: '#F9F9F6',
          200: '#f2f2eb',
          300: '#eaeae0',
        },
        luxury: {
          dark: '#121212',
          card: '#1a1a1a',
          border: 'rgba(212, 175, 55, 0.2)',
          accent: '#D4AF37',
          amber: '#C5A059',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 40px -5px rgba(212, 175, 55, 0.45)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3DC98 0%, #D4AF37 50%, #C5A059 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, #222222 0%, #121212 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}
