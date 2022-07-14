/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',

    './src/**/*.{html,js}',
    './src/**/*.{html,ts}',
    './src/***/**/*.{html,tsx,ts,jsx,js}',
    './src/****/***/*.{html,tsx,ts,jsx,js}',
    './src/*.{html,tsx,ts,jsx,js}',
    './src/*****/****/***/**/*.{html,tsx,ts,jsx,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
