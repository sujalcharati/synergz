/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#009EEB',
        darkAccent: '#003E5C',
        lightAccent: '#33B7FF',
        neutralGray: '#F0F0F0',
        darkText: '#1A1A1A',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

