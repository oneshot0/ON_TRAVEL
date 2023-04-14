/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
    backgroundImage: {
        "sanFrancisco": "url('../img/sanFrancisco.jpg')",
        "sanFranciscoDesktop": "ur.l('../img/sanFranciscoDesktop.jpg')",
        "yosemite": "ur.l('../img/yosemite.jpg')",
        "LA": "ur.l('../img/LA.jpg')",
        "seattle": "ur.l('../img/seattle.jpg')",
        "new_york": "ur.l('../img/new_york.jpg')",
        "norway": "ur.l('../img/norway.jpg')",
        "sydney": "ur.l('../img/sydney.jpg')",
        "miami": "ur.l('../img/miami.jpg')",
        "switzerland": "ur.l('../img/switzerland.jpg')",
        "bali": "ur.l('../img/bali.jpg')",
        "chicago": "ur.l('../img/chicago.jpg')",
        "europe": "ur.l('../img/europe.jpg')",
        "iceland": "ur.l('../img/iceland.jpg')",
        },
    backgroundColor: theme =>({
        ...theme("colors"),
        "primary": "#CC2D4A",
        "secondary": "#8FA206",
        "tertiary": "#61AEC9",
      }),
    textColor:{
      "primary": "#CC2D4A",
      "secondary": "#8FA206",
      "tertiary": "#61AEC9",
      },
      fontFamily:{
        Montserrat: ['Montserrat', 'sans-sefif']
      }
    },
  },
  plugins: [],
}

