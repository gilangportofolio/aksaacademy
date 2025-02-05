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
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Menggunakan persentase untuk lebih fleksibel
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
};