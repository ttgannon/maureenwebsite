/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#65001A",
      },
      screens: {
        desktop: { min: "1024px" },
        phone: { max: "1023px" },
        tablet: { max: "1023px", min: "771px" },
      },
    },
  },
  plugins: [],
}

