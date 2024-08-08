module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fffbf2',
      'peach': '#ffdbc0',
      'black': '#303030',
      'blue': '#3366CC',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], // Add Poppins as the default sans font

    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
    }
  }
}
