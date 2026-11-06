/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          950: '#081C15',
          900: '#1B4332',
          800: '#2D6A4F',
          700: '#40916C',
          600: '#52B788',
          500: '#74C69D',
          200: '#B7E4C7',
          100: '#D8F3DC',
        },
        sand: {
          50: '#FDFBF7',
          100: '#FBF9F5',
          200: '#F4F1EA',
          300: '#E8E3D7',
          400: '#D5CEC0',
        },
        campfire: {
          DEFAULT: '#E76F51',
          hover: '#DB5A3A',
          amber: '#D97706',
          sunset: '#F4A261',
          gold: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(27, 67, 50, 0.08), 0 2px 6px -1px rgba(27, 67, 50, 0.04)',
        'float': '0 12px 36px -4px rgba(27, 67, 50, 0.16), 0 4px 12px -2px rgba(27, 67, 50, 0.08)',
      },
    },
  },
  plugins: [],
};
