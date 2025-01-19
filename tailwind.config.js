/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      backgroundImage: {
        'backimg': "url('../images/image.jpg')",
        'backgroundimg': "url('../images/element.png')",

       
      },
      colors:{
        'overly': 'rgba(0, 0, 0, 0.7)'
      },

    },
  },
  plugins: [],
}
