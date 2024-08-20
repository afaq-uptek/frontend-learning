/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      spacing: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '17.5': '4.375rem',
        '18.5': '4.625rem',
        '23.5': '5.875rem',
      }
    },
  },
  plugins: [],
}

