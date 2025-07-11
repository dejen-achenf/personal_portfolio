/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#1E293B",
        tertiary: "#38BDF8",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#8B5CF6",
        "electric-purple": "#6A5ACD",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
