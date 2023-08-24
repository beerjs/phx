/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      jetbrains: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        black: '#0F0D0E',
        pink: '#E590A3',
        blue: '#53B2E0',
        yellow: '#F2BD4C',
        orange: '#EB7C3E',
        purple: '#765FA2',
        green: '#4DA663',
        bg: '#1e1e1e',
      },
    },
  },
  plugins: [],
};
