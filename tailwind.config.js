/** @type {import('tailwindcss').Config} */
export default {
  content: [
    /* add these lines */
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    /* the lines between these comments */
  ],
  theme: {
    extend: {
      fontFamily: {
        martian: ["Martian Mono", "monospace"],
        sora: ["Sora", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      animation: {
        buttonheartbeat: "buttonheartbeat 2s infinite ease-in-out",
      },
      keyframes: {
        buttonheartbeat: {
          "0%": {
            "box-shadow": '0 0 0 0 theme("colors.yellow.500")',
            transform: "scale(1)",
          },
          "50%": {
            "box-shadow": '0 0 0 7px theme("colors.yellow.500/0")',
            transform: "scale(1.10)",
          },
          "100%": {
            "box-shadow": '0 0 0 0 theme("colors.yellow.500/0")',
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
