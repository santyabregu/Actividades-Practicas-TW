/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class', // Soporte para modo oscuro mediante la clase .dark
  theme: {
    extend: {
      colors: {
        // Color primario de marca personalizado con escala propia
        primary: {
          50: '#f0f5ff',
          500: '#3b82f6',
          600: '#2563eb',
          DEFAULT: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        // Tipografía corporativa personalizada utilizable con font-brand
        brand: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        // Sombra corporativa con transparencia
        'brand-glow': '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
      }
    },
  },
  plugins: [],
};