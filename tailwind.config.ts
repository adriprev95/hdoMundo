/* @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      abhayaextrabold: ['Abhaya Libre ExtraBold'],
      abhayasemibold: ['Abhaya Libre SemiBold']
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
