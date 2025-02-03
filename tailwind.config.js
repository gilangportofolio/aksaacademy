/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Tambahkan base styles
  corePlugins: {
    preflight: true,
  },
  // Inject Tailwind's base styles
  base: true,
};