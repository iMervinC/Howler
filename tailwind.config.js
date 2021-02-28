module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
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
          hover: 'rgba(140, 50, 255, 0.90)',
          linkHover: 'rgba(140, 50, 255, 0.4)',
          disabled: 'rgba(140, 50, 255, 0.5)',
          twitter: '#00D1FF',
        },
      },
      width: {
        side: '250px',
        sideM: '50px',
        main: '600px',
      },
      maxWidth: {
        main: '600px',
        side: '250px',
      },
      minWidth: {
        main: '300px',
        side: '100px',
        window: '375px',
      },
      height: {
        howl: 'calc(100% - 5rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
