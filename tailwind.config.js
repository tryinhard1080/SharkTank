/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // WasteWise Gold Standard Colors (Forest Green Theme)
        'forest': {
          900: '#1f4220',    // Darkest - headers, primary buttons
          800: '#2C5F2D',    // Primary brand color
          700: '#3d7a3e',    // Hover states
          600: '#4e954f',    // Secondary elements
          500: '#5fb060',    // Lighter accent
          100: '#e8f5e9',    // Light backgrounds
          50: '#f1f8f2',     // Lightest background
        },
        'forest-green': '#2C5F2D',   // Primary (alias)
        'forest-dark': '#1f4220',    // Dark variant (alias)
        'light-green': '#90EE90',    // Light accent
        // Status Colors (Gold Standard)
        'success': '#22C55E',
        'warning': '#EAB308',
        'danger': '#DC2626',
        'orange': {
          DEFAULT: '#FF8C00',  // Accent color
          600: '#e67e00',
          500: '#FF8C00',
          400: '#ffa333',
          100: '#fff3e0',
        },
        // Legacy compatibility aliases
        'electric-blue': '#2C5F2D',  // Maps to forest-green for gradual migration
        'neon-green': '#22C55E',     // Maps to success green
        'sunset-coral': '#DC2626',   // Maps to danger
        'deep-green': '#1a4d1c',     // Darker forest green variant
        'bourbon-orange': '#FF8C00', // Accent orange
        'dark-navy': '#1f4220',      // Maps to forest-dark
        'navy': {
          900: '#1f4220',  // Maps to forest-dark
          800: '#2C5F2D',  // Maps to forest-green
          700: '#3d7a3e',
          100: '#e8f5e9',
        },
        // Alert colors
        'alert': {
          red: '#DC2626',
          yellow: '#EAB308',
          orange: '#FF8C00',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(44, 95, 45, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(44, 95, 45, 0.8)' },
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
        'glow': '0 0 20px rgba(44, 95, 45, 0.5)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.5)',
        'glow-forest': '0 0 20px rgba(44, 95, 45, 0.5)',
        'float': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
