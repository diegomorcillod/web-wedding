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
          500: '#f9b8cb',
          600: '#f9b8cb',
          700: '#f9b8cb',
        },
        'wedding-green': {
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
    },
  },
  plugins: [],
}
