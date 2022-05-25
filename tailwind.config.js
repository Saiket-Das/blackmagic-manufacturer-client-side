module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        manufacturer: {
          primary: "#FFC75F",
          secondary: "#845EC2",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
