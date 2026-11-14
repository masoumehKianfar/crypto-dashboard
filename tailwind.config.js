import { LightColors, DarkColors } from "./src/theme/color";
import { FontSize } from "./src/theme/font-size";

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
      fontSize: FontSize,
    },

    plugins: [],
  },
};
