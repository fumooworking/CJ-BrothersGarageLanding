/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'sm': '540px',
        'custom': '650px',
      },
      fontSize: {
        '32px': '32px',
        '42px':'42px',
        '64px':'64px'  
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ['responsive', 'hover', 'focus'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
};
