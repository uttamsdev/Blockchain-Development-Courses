module.exports = {
  content: ["./**/*.{html,js}", "./html_files/**/*.{html,js}"],
  theme: {
    extend: {
      backgrounImage: {
        hero: "url('./src/img/bg.jpg')",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
      robo: ["Roboto", "sans-serif"],
    },
  },
  plugins: [
    require('tailwindcss-tables')(),
  ],
};
