/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171717',
        paper: '#fffaf5',
        coral: '#ff6b57',
        sand: '#ffe5d0',
        blush: '#ffd0d8',
        ember: '#8b2d1f',
        mist: '#f7f2ee',
      },
      fontFamily: {
        display: ['"Manrope"', '"Noto Sans SC"', 'sans-serif'],
        body: ['"Manrope"', '"Noto Sans SC"', 'sans-serif'],
      },
      boxShadow: {
        float: '0 24px 80px rgba(110, 58, 20, 0.14)',
      },
      backgroundImage: {
        glow:
          'radial-gradient(circle at 20% 20%, rgba(255, 138, 116, 0.28), transparent 32%), radial-gradient(circle at 80% 10%, rgba(255, 226, 183, 0.75), transparent 26%), radial-gradient(circle at 78% 75%, rgba(255, 189, 201, 0.65), transparent 24%), linear-gradient(180deg, #fffaf5 0%, #fff4eb 100%)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 700ms ease-out both',
      },
    },
  },
  plugins: [],
};
