/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0f1f3d',
          'navy-light': '#1a2f4d',
          blue: '#4a8cff',
          'blue-light': '#5fa3ff',
        },
        accent: {
          orange: '#ff6b35',
          'orange-light': '#ff8c5f',
        },
        neutral: {
          dark: '#0a0f1a',
          gray: '#8b9cb5',
          light: '#e8eef5',
        },
      },
    },
  },
  plugins: [],
}
