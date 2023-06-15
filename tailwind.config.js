/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        DarkGray: 'hsl(0, 0%, 63%)',
        VeryDarkGray: 'hsl(0, 0%, 27%)',
        shade: 'rgba(0,0,0,0.2)'
      },
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans-serif'],
      },
      screens: {
        'xss': '480px'
      }
    },
  },
  plugins: [],
}

