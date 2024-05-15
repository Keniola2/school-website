/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1d1a17',
        grey: '#484B4B',
        yellow: '#FFDF8B',
        blue:'#F8F4F1',
        darkblue:'#B3D4F2',
        green:'#C3EFC8',
        purple:'#E2D4F4',
        lightpurple:'#F6DAE9',
        white:'#FFFBF8',
        about:'#DDE9EF',
        pink:'#FBE3D9',
        lightyellow:'#F9E7B8',
      },

    },screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'},
    }
  },
  plugins: [],
}

