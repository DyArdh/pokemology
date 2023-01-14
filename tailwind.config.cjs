/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'double-arc': 'double-arc 0.8s infinite'
      },
      keyframes: {
        'double-arc': {
          '100%': { transform: 'rotate(.5turn)' }
        }
      }
    }
  },
  plugins: []
}
