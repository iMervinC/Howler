const { url } = require('inspector')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        logo: "url('/Logo.svg')",
        logoW: "url('/LogoW.svg')",
        'logo-mobile': "url('/pic1.svg')",
      }),
      colors: {
        custom: {
          DEFAULT: '#8C32FF',
          twitter: '#00D1FF',
        },
      },
      width: {
        side: '250px',
        sideM: '50px',
        main: '600px',
        full: '1100px',
      },
      maxWidth: {
        main: '600px',
      },
      minWidth: {
        main: '600px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
