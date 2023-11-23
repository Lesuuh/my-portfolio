/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray : "#F2F5F9" ,
        lineColor: "#E3E3E3",
        grayTextColor: "rgba(11, 9, 9, 0.50)"
      }
    },
  },
  plugins: [],
}