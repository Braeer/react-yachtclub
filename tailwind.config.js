/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-navbar': 'rgba(217, 217, 217, 0.4)',
        'regular-blue': 'rgb(12, 140, 233)',
        gray: 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        OpenSans: ['OpenSansCondensed'],
      },
      backgroundImage: {
        headerbg: "url('/src/assets/img/headerbg.webp')",
        AmenitiesBottomImage: "url('/src/assets/img/AmenitiesBottomImage.png')",
      },
    },
  },
  plugins: [],
};
