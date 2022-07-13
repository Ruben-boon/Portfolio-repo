/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      //container breakpoints
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1168px'
        //xl: '1280'  (default)
      },
      container:{
        center: true,
        padding:{
          DEFAULT: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: '2rem'
        }
      },

      extend: {
        colors: {
          'figma-gray': '#667085'
        },
        width: {
          '1.3x': '130%',
          '1.4x': '140%',
          '1.5x': '150%',
          '1.6x': '160%',
          '1.7x': '170%',
          '1.8x': '180%',
          '1.8x': '180%',
          '1.9x': '190%',
          '2x': '200%',
          '2.1x': '210%',
          '2.3x': '230%'
        },
        fontFamily: {
          'sans': ['Inter'],
        }
      },
    },
  plugins: [],
}
