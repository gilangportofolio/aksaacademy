/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'scroll 50s linear infinite',
        'infinite-scroll-desktop': 'scroll 80s linear infinite',
        blob: "blob 7s infinite",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
  // Tambahkan base styles
  corePlugins: {
    preflight: true,
  },
  // Inject Tailwind's base styles
  base: true,
  variants: {
    extend: {
      scale: ['group-hover'],
      brightness: ['group-hover'],
    },
  },
};