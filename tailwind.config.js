// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1920px',
    },
    extend: {
      fontSize:{
        'heading': 'clamp(2rem, 5vw, 3.5rem)',
        'subheading': 'clamp(1.25rem, 3vw, 2rem)', // adjust slightly
        'body': 'clamp(1rem, 2vw, 1.25rem)', // adjusted for smaller screens
        'nav': 'clamp(1rem, 2vw, 1.5rem)',

      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: {
          50: "#d0d7de",  // Lightest tint
          100: "#a1afbd",
          200: "#71889c",
          300: "#4c6a82",
          400: "#2c4a65",
          500: "#132b43",  // Mid-tone
          600: "#0b2136",
          700: "#06162a",
          800: "#041022",
          900: "#021526",  // Darkest shade
        },
        secondary: {
          50: "#e0f2f1",  // Lightest tint
          100: "#b2dfdb",
          200: "#80cbc4",
          300: "#4db6ac",
          400: "#26a69a",
          500: "#009688",  // Base teal (approx.)
          600: "#00897b",
          700: "#00796b",  // Mid-tone
          800: "#00695c",
          900: "#004d40",  // Darkest shade
        },
        textDefault: "#2c4a65",
        textLight: "#71889c",
        textDark: "#0b2136",
      }
    },
  },
  plugins: [],
}
