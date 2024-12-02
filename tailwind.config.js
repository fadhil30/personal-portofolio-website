/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        default: "#030712",
        "gray-50": "#111827",
        "gray-100": "#1f2937",
        "gray-200": "#374151",
        "gray-300": "#4b5563",
        "gray-400": "#6b7280",
        "gray-500": "#9ca3af",
        "gray-600": "#d1d5db",
        "gray-700": "#e5e7eb",
        "gray-800": "#f3f4f6",
        "gray-900": "#f3f4f6",
        "pure-white": "#ffffff",
        emerald: "#10b981",
      },
    },
  },
  plugins: [],
};
