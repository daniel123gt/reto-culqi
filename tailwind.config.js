/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/assets/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"]
      },
      colors: {
        primary: "var(--color-primary-base)",
        "others-blue": "var(--color-others-blue)",
        "alerts-error-base": "var(--color-alerts-error-base)",
        "grayscale-50": "var(--color-grayscale-50)",
        "grayscale-100": "var(--color-grayscale-100)",
        "grayscale-300": "var(--color-grayscale-300)",
        "grayscale-500": "var(--color-grayscale-500)",
        "grayscale-600": "var(--color-grayscale-600)",
        "grayscale-900": "var(--color-grayscale-900)",
      }
    },
  },
  plugins: [],
}

