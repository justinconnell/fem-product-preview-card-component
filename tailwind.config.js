/** @type {import('tailwindcss').Config} */
// noinspection JSUnusedGlobalSymbols

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-white': '#ffffff',
        'cream': '#F2EAE2',
        'green': '#3D8168',
        'green-dark': '#1A4032',
        'black': '#1C232B',
        'gray': '#6C7289',
      },
      fontFamily: {
        display: 'Fraunces, serif',
        body: 'Montserrat, sans-serif',
        btnText: 'Montserrat, sans-serif',
        overline: 'Montserrat, sans-serif',
      },
      letterSpacing: {
        '5': '5px',
      },
    },
  },
  plugins: [],
}

