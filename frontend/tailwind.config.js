/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // Set Outfit as the default sans-serif font
      },
      animation: {
        'scale-in': 'scaleIn 0.3s ease-in-out forwards',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
    
  },
  plugins: [],
}
