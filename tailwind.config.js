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
        grayTextColor: "rgba(11, 9, 9, 0.50)",
        buttonsBg : "#F2F7FC",
        buttonBg : "#E1E8EF",
        iconColor: "rgba(26, 16, 3, 0.5)",
        cardBg: "#FFEBD1",
        cardBg2 : "#FFEED9",
        red: "#ed250a",
        yellow: "#ff9c1a",
        skillsBg: "#F8FBFB",

        bgDark: "#282a36",
        textColorDark : "fff"




      }
    },
  },
  plugins: [],
}