/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          // Defines the 'animate-scan' class
          'scan': 'scan-line 3s linear infinite',
        },
        keyframes: {
          'scan-line': {
            '0%': { top: '0%', opacity: '0' },
            '5%': { opacity: '1' },
            '95%': { opacity: '1' },
            '100%': { top: '100%', opacity: '0' },
          }
        }
      },
    },
    plugins: [],
  }