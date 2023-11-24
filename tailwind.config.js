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
      colors: {
        mainPurple: 'var(--main-purple)',
        mainOrange: 'var(--main-orange)',
        mainGrey: 'var(--main-grey)',
        mainWhite: 'var(--main-white)',
        mainMagenta: 'var(--main-magenta)',
        secWhite: 'var(--sec-white)',
        lightGrey1: 'var(--sec-light-grey-1)',
        lightGrey2: 'var(--sec-light-grey-2)',
        lightGrey3: 'var(--sec-light-grey-3)',
        lightGrey4: 'var(--sec-light-grey-4)',
        lightGrey5: 'var(--sec-light-grey-5)',
        lightGrey6: 'var(--sec-light-grey-6)',
        danger: 'var(--danger)'
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        poppins: 'var(--font-poppins)',
      },
    },
  },
  plugins: [],
};
