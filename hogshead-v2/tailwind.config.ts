import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#082b31',
        deep: '#023E48',
        teal: '#0B6F72',
        aqua: '#7BC6C7',
        gold: '#D88B42',
        sand: '#F2EDE3',
        paper: '#FBF8F0',
        bone: '#FFFDF7',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        premium: '0 32px 110px rgba(2, 62, 72, 0.14)',
        soft: '0 18px 54px rgba(2, 62, 72, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
