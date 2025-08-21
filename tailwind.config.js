/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'Color-Dark-Green': '#214538',
        'Color-Light-Green': '#3B3B3B',
        'Color-Light-Primary': '#FFFEF1',
        'Color-Dark-Primary': '#1E1E1E',
        'Color-Dark-Secondary': '#757575',
        'Color-Light-Secondary': '#9C9C9C',
        'neutral': {
          400: '#9C9C9C',
          700: '#3B3B3B',
        },
        'stone': {
          900: '#1E1E1E',
        },
        'zinc': {
          300: '#D3D3D3',
        },
        'green': {
          900: '#214538',
        },
      },
      fontFamily: {
        'fieldstones': ['Fieldstones', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
