module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#111111',
        accent: '#7C3AED',
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#151515',
          lighter: '#1A1A1A',
        },
        gray: {
          lightest: '#F9FAFB',
          lighter: '#E5E7EB',
          light: '#D1D5DB',
          DEFAULT: '#9CA3AF',
          dark: '#6B7280',
          darker: '#374151',
          darkest: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at center, rgba(91, 33, 182, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
        'text-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
        'dark-gradient': 'linear-gradient(to bottom, rgba(10,10,10,0.9), rgba(0,0,0,1))',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50%))' }
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      }
    },
  },
  plugins: [],
} 