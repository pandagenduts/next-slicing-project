/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1018px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-1':
          'linear-gradient(2deg, #101010 79.11%, rgba(0, 0, 0, 0.00) 103.73%, rgba(0, 0, 0, 0.00) 103.73%), linear-gradient(174deg, #A060FA 17.25%, #C800CC 58.14%)',
      },
      colors: {
        mainPurple: 'var(--main-purple)',
        mainOrange: 'var(--main-orange)',
        mainGrey: 'var(--main-grey)',
        mainWhite: 'var(--main-white)',
        mainMagenta: 'var(--main-magenta)',
        lightGrey1: 'var(--sec-light-grey-1)',
        lightGrey2: 'var(--sec-light-grey-2)',
        lightGrey3: 'var(--sec-light-grey-3)',
        lightGrey4: 'var(--sec-light-grey-4)',
        lightGrey5: 'var(--sec-light-grey-5)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        poppins: 'var(--font-poppins)',
      },
    },
  },
  plugins: [],
};
