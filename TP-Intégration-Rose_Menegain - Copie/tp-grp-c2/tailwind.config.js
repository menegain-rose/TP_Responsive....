module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "DarkBlue": "#111827",
        "Blue": "#312e81",
        "ClearBlue": "#6366f1",
        "White": "#ffffff"
      },
      "fontSize": {
        "base": "1rem",
        "lg": "1.5rem",
        "xl": "2.25rem",
        "2xl": "3.75rem"
      },
      "fontFamily": {
        "inter": "Inter"
      },
    },
  },

  plugins: [],
}
