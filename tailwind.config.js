/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-sidebar": "rgb(105, 108, 255)",
        "active-menu-sidebar": "rgba(105, 108, 255, 0.16)",
        "title-menu-sidebar": "rgba(50, 71, 92, 0.38)",
        "placeholder": "#f5f5f9",
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
        "32px": "32px",
        "64px": "64px",
      }
    },
  },
  plugins: [],
}
