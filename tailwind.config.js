/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#12181B",
        "gunmetal": "#2A2F35",
        "blue": "#58A4B0",
        "timber": "#DBD7D2",
      }
    },
  },
  plugins: [],
}

