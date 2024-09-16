/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
        '9.5': '2.375rem',
        '12.5': '3.125rem',
        '15.5': '3.875rem',
        '17.5': '4.375rem',
        '18.5': '4.625rem',
        '23.5': '5.875rem',
      }
    },
  },
  plugins: [],
}

