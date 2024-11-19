const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#CBA153', // Dourado
        black: '#000000', // Preto
        white: '#FFFFFF', // Branco
        pink: {
          light: '#FBD9FB', // Rosa claro
          medium: '#E58FE6', // Rosa médio
          dark: '#C946C9', // Rosa escuro
        },
        gradient: {
          pink: 'linear-gradient(90deg, #FBD9FB, #C946C9)', // Gradiente rosa
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
