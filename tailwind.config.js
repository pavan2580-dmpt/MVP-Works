/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8c25f4",
        "accent-pink": "#f425d6",
        "background-dark": "#191022",
        "surface-dark": "#261834",
        "background-light": "#f7f5f8",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      backgroundImage: {
        "glow-gradient":
          "radial-gradient(circle at center, rgba(140, 37, 244, 0.15) 0%, rgba(25, 16, 34, 0) 70%)",
      },
    },
  },
  plugins: [],
};
