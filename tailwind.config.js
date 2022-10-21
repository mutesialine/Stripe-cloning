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
        "dark-blue": "#0a2540",
        "light-blue": "#635bff",
        "light-gray": "#f6f9fc",
        primary: "#0a2540",
      },
      padding: {
        hundered: "100px",
      },
      margin: {
        hundered: "100px",
      },
      fontSize: {
        medium: "15px",
      },
      width: {
        fit: "fit-content",
        "18r": "18rem",
        "medium-width":"480px"
      },
      fontSize: {
        eighty: "80px",
      },
      height: {
        fit: "fit-content",
      },
    },
    plugins: [],
  },
};
