module.exports = {
  purge: [
      "./content/**/*.htm",
      "./layouts/**/*.htm",
      "./pages/**/*.htm",
      "./partials/**/*.htm",

    ],
  theme: {
     fontFamily:{
          'sans': [ 'Assistant','poppins', 'sans-serif'],
    },

    extend: {
        colors: {
        "blue-industrial-1": "#0d1929",
        "blue-industrial-2": "#11304c",
      },   
    height: theme => ({
        "screen-p-70": "calc(100vh + 70px)",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  variants: {
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
  },
  plugins: [
      require('tailwindcss-blend-mode')(), // no options to configure
  ],
};