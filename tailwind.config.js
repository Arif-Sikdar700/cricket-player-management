/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ["Sora", "sans-serif"],
      },
      colors: {
        'yellowColors': '#E7FE29',
        "footerColors": "#06091A"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
