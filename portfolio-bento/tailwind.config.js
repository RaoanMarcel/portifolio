/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'grid-flow': 'grid-flow 20s linear infinite', 
      },
      keyframes: {
        'grid-flow': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' }
        },
      },
    },
  },
  plugins: [],
}