/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,md,mdx}"],
  theme: {
    fontFamily: {
      merriweather: "Merriweather",
    },
    extend: {
      animation: {
        transitionProperty: {
          fade: "opacity",
        },
        transitionDuration: {
          500: "0.5s",
        },
      },
    },
  },
  plugins: [],
};
