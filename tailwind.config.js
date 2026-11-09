import { LightColors } from "./src/theme/color";
import { DarkColors } from "./src/theme/color";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        light: LightColors,
        dark: DarkColors,
      },
    },

    plugins: [],
  },
};
