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
      fontFamily :{
        martian : ["Martian Mono", "monospace"],
        sora : ["Sora", "sans-serif"],
        urbanist : ["Urbanist","sans-serif"]
      }
    },
  },
  plugins: [],
}
