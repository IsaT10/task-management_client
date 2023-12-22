/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#FF6347',
      },
      fontFamily: {
        gloria: ['Gloria Hallelujah', 'cursive'],
        josep: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
