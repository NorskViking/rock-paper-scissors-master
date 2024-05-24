/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        rings: 
          '0 0 0 60px rgba(43, 57, 86, 1), 0 0 0 120px rgba(37, 52, 83, 1), 0 0 0 180px rgba(33, 48, 79, 1)',
      },
      colors: {
        darkText: 'hsl(229, 25%, 31%)',
        scoreText: 'hsl(229, 64%, 46%)',
        headerOutline: 'hsl(227, 16%, 45%)',
      },
      backgroundImage: {
        'triangle': "url('./assets/bg-triangle.svg')",
        'pentagon': "url('./assets/bg-pentagon.svg')",
      },
    },
  },
  plugins: [],
}

