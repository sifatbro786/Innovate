import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'paprika': ['Paprika, system-ui', ],
        'nunito': ['Nunito Sans, sans-serif', ],
      },
      backgroundImage: {
        'hero': "url('/bghero.png')",
        'hero2': "url('/222.png')",
      }
    },
  },
  plugins: [
    daisyui
  ],
}