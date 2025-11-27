/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Lora', 'serif'],
        'display': ['Passero One', 'cursive'],
        'script': ['Pacifico', 'cursive'],
        'crimson': ['Crimson Text', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'baskerville': ['Libre Baskerville', 'serif'],
      },
      colors: {
        'wedding-pink': {
          500: '#f472b6',
          600: '#ec4899',
          700: '#db2777',
        },
        'wedding-green': {
          500: '#86efac',
          600: '#4ade80',
          700: '#22c55e',
        },
      },
    },
  },
  plugins: [],
}
