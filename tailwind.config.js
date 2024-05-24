/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_color: '#350F6C',
        secondary: '#C91984',
        linearblue_primary: '#5017A3',
        white:'#FFFFFF',
        screen_bg:'#F4F4FD',
        light_blue:'#F1F6F8',
        black:'#000000',
        


      }
    },
  },
  plugins: [],
}