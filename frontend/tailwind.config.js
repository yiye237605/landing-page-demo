/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171717',
        secondary: '#4d4d4d',
        blue: {
          50: '#ebf5ff',
          100: '#d6ebff',
          500: '#0072f5',
          600: '#005cb8'
        }
      },
      boxShadow: {
        'border': '0px 0px 0px 1px rgba(0,0,0,0.08)',
        'border-hover': '0px 0px 0px 1px rgba(0,0,0,0.16)',
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.12)',
        'primary': '0 4px 20px rgba(23,23,23,0.3)'
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px'
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      }
    },
  },
  plugins: [],
}