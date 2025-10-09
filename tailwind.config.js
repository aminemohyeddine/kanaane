/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      screens: {
        xs: '0px',
      },
      fontFamily: {
        abchanel: ['"ABChanel Corpo Regular"', 'sans-serif'],
      },
      fontSize: {
        xxs: ['0.625rem', '0.875rem'],
        huge: ['5rem', '1'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
