/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        logo: ['Caveat', 'cursive'],
        accent: ['Kalam', 'Patrick Hand', 'cursive'],
        signature: ['Tomorrow', 'sans-serif'],
        display: ['Tomorrow', 'sans-serif'], // Portfolio style
      },
      letterSpacing: {
        wider: '0.05em',
        widest: '0.1em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  plugins: [],
}
