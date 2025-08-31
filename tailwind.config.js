/** @type {import('tailwindcss').Config} */
export const content = ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "livix-deep": "#005B6E", // Deep water blue (for text/nav)
      "livix-aqua": "#B2E0E4", // Aqua accent (hover, highlights)
      "livix-light": "#E6F7FA", // Light background tint
      "brand-blue": "#0077b6",
    },
  },
};
export const plugins = [];
