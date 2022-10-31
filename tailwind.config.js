/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik-regular', 'sans-serif'],
        segoe: ["Segoe UI", "sans-serif"],
        "sans-secondary": ['Graphik-semibold', 'sans-serif'],
        "sans-medium": ['Graphik-medium', 'sans-serif']
      },
      colors: {
        "txt-bg": "#3f3f46",
        "hero-txt": "#676767",
        "txt-color": "#3f4246"
      },
      backgroundImage: {
        "hero-bg": "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)",
        "hero-text": "linear-gradient(#9092fb,#86b5ef,#7bdde2)"
      }
      
    },
  },
  plugins: [],
}
