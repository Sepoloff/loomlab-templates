import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fffbf7',
          100: '#fff8f0',
          200: '#ffeee4',
          300: '#ffd9c9',
          400: '#ffbfa3',
          500: '#ffa080',
          600: '#ff8a5c',
        },
        rose: {
          100: '#ffe4f0',
          200: '#ffcce3',
          300: '#ffb3d9',
          400: '#ff80b8',
          500: '#ff4d94',
          600: '#e63384',
          700: '#cc1f7b',
        },
        blush: {
          50: '#fef5f6',
          100: '#fde9ec',
          200: '#fad5db',
          300: '#f5b8c9',
          400: '#f0a0b8',
          500: '#e897a9',
          600: '#d67c96',
        },
        gold: {
          50: '#fdf9f3',
          100: '#fbf3e6',
          300: '#f4d9a1',
          500: '#d4a574',
          600: '#c89664',
        },
        light: {
          50: '#ffffff',
          100: '#f9f9f9',
          200: '#f3f3f3',
          300: '#e8e8e8',
          400: '#d1d1d1',
          500: '#b4b4b4',
          600: '#8a8a8a',
          700: '#5a5a5a',
          800: '#3d3d3d',
          900: '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
