/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      white: "#ffffff",
      red: {
        100: "hsl(356, 100%, 66%)",
        200: "hsl(355, 100%, 74%)",
        300: "hsl(13, 100%, 72%)",
        400: "hsl(353, 100%, 62%)",
      },
      blue: {
        100: "hsl(208, 49%, 24%)",
        200: "hsl(240, 2%, 79%)",
        300: "hsl(207, 13%, 34%)",
        400: "hsl(240, 10%, 16%)",
        500: "hsl(237, 17%, 21%)",
        600: "hsl(237, 23%, 32%)",
      },
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      fontFamily: {
        overpass: "Overpass, sans-serif",
        ubuntu: "Ubuntu, sans-serif",
      },
    },
  },
  plugins: [],
};
