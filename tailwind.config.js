/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "3xl": { max: "1918px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      md: { max: "1035px" },
      sm: { max: "767px" },
      xs: { max: "431px" },
    }
  },
  plugins: [],
}

