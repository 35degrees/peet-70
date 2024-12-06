/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      sm: "376px",
      md: "767px",
      lg: "1280px",
    },
    extend: {},
  },

  plugins: [],
};
