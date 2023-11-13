import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      black: '#050505',
      lighterBlack: '#1F1F1F',
      blackGray: '#2D2D2D',
      darkGray: '#3A3A3A',
      mediumGray: '#757575',
      lightGray: '#E9E9E9',
      lightestGray: '#F4F4F4',
      white: '#FFFFFF',
      lightPurple: '#A445ED',
      red: '#FF5252',
    },
    fontFamily: {
      sans: 'Inter',
      serif: 'Lora',
      mono: 'Inconsolata',
    },
  },
  plugins: [require('flowbite/plugin')],
};
