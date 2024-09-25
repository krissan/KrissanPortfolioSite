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
      'black': '#1b1b1b',
      'blue': '#3366CC',
      'light-blue': '#52a0f8',
      'red': '#f87060',
      'gray': {
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
      }
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
