/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Courier Prime', 'Courier New', 'monospace'],
        serif: ['Courier Prime', 'Courier New', 'monospace'],
        heading: ['Courier Prime', 'Courier New', 'monospace'],
        mono: ['Courier Prime', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

