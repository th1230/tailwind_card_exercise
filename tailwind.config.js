module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2dd87d",
        "primary-dark": "#23bc6b",
        secondary: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
