/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      "6px": "6px"
    },
    extend: {
      colors: {
        ...defaultTheme.colors,
        "primary": "#0171e2",
        "primary-shade": "#0065cb",
        "placeholder": "#f5f5f9",
        "gray-350": "#bcbfc5",

        // sidebar 
        "active-menu-sidebar": "#cce2f9",
        "title-menu-sidebar": "rgba(50, 71, 92, 0.38)",
      },
      spacing: {
        "2px": "2px",
        "5px": "5px",
        "8px": "8px",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "32px": "32px",
        "64px": "64px",
      }
    },
  },
  plugins: [],
}
