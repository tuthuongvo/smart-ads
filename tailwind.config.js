/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#173C98",
      white: "#ffffff",
    },
    extend: {
      borderColor: {
        input: "#E5E7EB",
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1A56DB",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        success: {
          light: "#d1fae5", // Light Success
          DEFAULT: "#10b981", // Default Success (Green)
          dark: "#065f46", // Dark Success
        },
        error: {
          light: "#fee2e2", // Light Error
          DEFAULT: "#ef4444", // Default Error (Red)
          dark: "#991b1b", // Dark Error
        },
        warning: {
          light: "#fef3c7", // Light Warning
          DEFAULT: "#f59e0b", // Default Warning (Yellow)
          dark: "#92400e", // Dark Warning
        },
        info: {
          light: "#dbeafe", // Light Info
          DEFAULT: "#3b82f6", // Default Info (Blue)
          dark: "#1e3a8a", // Dark Info
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
