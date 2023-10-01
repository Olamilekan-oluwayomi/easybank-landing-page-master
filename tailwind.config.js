/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '560px',
      mmd: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        DarkBlue: 'hsl(233, 26%, 24%)',
        LimeGreen: 'hsl(136, 65%, 51%)',
        BrightCyan: 'hsl(192, 70%, 51%)',
      },
      fontFamily: {
        Public: ['Public Sans'],
      },
      backgroundImage: theme => ({
        'gradient-primary': `linear-gradient(to right, ${theme(
          'hsl(136, 65%, 51%)'
        )}, ${theme('hsl(192, 70%, 51%)')})`,
      }),

      backgroundImage: {
        'hero-pattern': "url('../images/bg-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
