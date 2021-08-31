module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        personalyellow: '#FED130',
        personalblack: '#121212',
        personaldarkgray: '#262626',
        personalgray: '#A0A0A0',
        personallightgray: '#E0E0E0',
        personalwhite: '#fff',
      },
      fontFamily: {
        karla: 'Karla'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
