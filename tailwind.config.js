module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#7641EF",
        "secondary-light": "#8456F0",
        "secondary-dark": "#6931ED",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
