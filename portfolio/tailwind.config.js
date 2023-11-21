/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      acron: ['Acron', 'sans-serif'],
      body: ['gt']
    },
    colors: {
      'pry':"#025a4e" 
    }
  },
  },
  plugins: [],
}