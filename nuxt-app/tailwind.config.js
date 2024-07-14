/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'palte-one-1': '#a2d2ff',
        'palte-one-2': '#bde0fe',
        'palte-one-3': '#ffafcc',
        'palte-one-4': '#ffc8dd',
        'palte-one-5': '#cdb4db',
        'palte-one-white': '#fafaff',

        'palte-two-1': '#ffd166',
        'palte-two-2': '#1d3557',
        'palte-two-3': '#457b9d',
        'palte-two-4': '#a8dadc',
        'palte-two-5': '#e63946',
        'palte-two-white': '#f1faee',
      },
      height:{
        '500':'500px'
      }
    },
  },
  plugins: [],
}

