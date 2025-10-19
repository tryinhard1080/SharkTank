/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (Navy)
        'dark-navy': '#00345B',
        'navy': {
          900: '#00345B',
          800: '#004A80',
          700: '#0066A5',
          100: '#E6F0F7',
        },
        // Modern Accent Colors (Electric Blue & Neon Green)
        'electric-blue': '#0080FF',
        'neon-green': '#00FF88',
        'sunset-coral': '#FF6B6B',
        // Legacy (maintaining backward compatibility)
        'bourbon-orange': '#B87024',
        'deep-green': '#2D6A4F',
        // Expanded Palette
        'orange': {
          600: '#B87024',
          500: '#D68934',
          100: '#FDEEE0',
        },
        'green': {
          700: '#2D6A4F',
          600: '#00D97E',
          500: '#40916C',
          100: '#D8F3DC',
        },
        'alert': {
          red: '#D62828',
          yellow: '#F77F00',
        },
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-bourbon': 'pulse-bourbon 1s ease-in-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'count-up': 'count-up 2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'checkmark': 'checkmark 0.5s ease-out',
      },
      keyframes: {
        'pulse-bourbon': {
          '0%': { opacity: '0.7', color: '#B87024' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0.7', color: '#B87024' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 128, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 128, 255, 0.8)' },
        },
        'count-up': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'checkmark': {
          '0%': { transform: 'scale(0) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(10deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      backdropBlur: {
        'glass': '20px',
        'glass-sm': '10px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 128, 255, 0.5)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.5)',
        'float': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
