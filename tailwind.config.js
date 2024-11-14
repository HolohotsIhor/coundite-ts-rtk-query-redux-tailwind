/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        theme: {
          green: '#5CB85C',
          link: 'rgba(0, 0, 0, 0.3)',
          linkHover: 'rgba(0, 0, 0, 0.6)',
          linkActive: 'rgba(0, 0, 0, 0.8)',
          bgSidebar: '#f3f3f3'
        }
      },
      boxShadow: {
        section: 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        h1: '0px 1px 3px rgba(0, 0, 0, 0.3)'
      },
      fontSize: {
        h1: '3.5rem',
        subtitle: '1.5rem'
      },
      borderRadius: {
        tag: '10rem'
      }
    },
  },
  plugins: [],
}
