const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      'xs': '375px',
    },
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'yellow-0': '#FFBC0D',
        'grey-0': '#CCCCCC',
        'grey-1':'#F7F7F7',
        'red-0':'#BE1C0F'
        
      },
      width: {
        '13.5': '3.375rem',
        '33.75': '8.4375rem',
        '37.5': '9.375rem',
        '54': '13.5625rem',
        '74': '18.5rem'
      },
      height: {
        '17': '4.3rem',
        '86': '21.5rem'
      },
      backgroundSize: {
        '50%': '50%',
        '16': '4.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require("daisyui"),
    require('@tailwindcss/line-clamp'),
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  
}
