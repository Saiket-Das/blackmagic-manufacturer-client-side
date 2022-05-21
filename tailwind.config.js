module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        manufacturer: {
          primary: "#ffdd42",
          secondary: "#235789",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
