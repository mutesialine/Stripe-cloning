/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gradient-color-one": "#a960ee",
        "gradient-color-two": "#ff333d",
        "gradient-color-three": "#90e0ff",
        "gradient-color-four": "#ffcb57",
      },
      width: {
        fit: "fit-content",
        "18r": "18rem",
      },
      height: {
        fit: "fit-content"
      }
    },
    plugins: [],
  },
};
