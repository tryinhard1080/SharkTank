/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#00345B',
        'bourbon-orange': '#B87024',
        'deep-green': '#2D6A4F',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-bourbon': 'pulse-bourbon 1s ease-in-out',
        'count-up': 'count-up 2s ease-out',
      },
      keyframes: {
        'pulse-bourbon': {
          '0%': { opacity: '0.7', color: '#B87024' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0.7', color: '#B87024' },
        },
        'count-up': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
};
