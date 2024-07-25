/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
  /* add these lines */
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  /* the lines between these comments */
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "forest","dark","dracula","emerald"
    ],
  }

}
