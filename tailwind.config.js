/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#1c60f2",
        "brand-blue": "#1c60f2",
        "background-light": "#f6f6f8",
        "background-dark": "#0a0a0a",
        "border-dark": "#1f1f1f",
        "zinc-950": "#09090b",
        "zinc-900": "#18181b",
        "zinc-800": "#27272a",
        "zinc-700": "#3f3f46",
        "zinc-600": "#52525b",
        "zinc-500": "#71717a",
        "zinc-400": "#a1a1aa",
        "zinc-300": "#d4d4d8",
        "zinc-200": "#e4e4e7",
        "zinc-100": "#f4f4f5",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px",
      },
    },
  },
  plugins: [],
}
