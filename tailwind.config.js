/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFF00", // Bright yellow
        secondary: "#000000", // Black
        accent: "#FF0000", // Red for the banner
      },
      backgroundColor: {
        primary: "#FFFF00",
        secondary: "#000000",
        lightYellow: "#FFFFE0",
        offWhite: "#FEF9F1",
        secondaryOffWhite: "#FDF4E3",
      },
      textColor: {
        primary: "#000000",
        secondary: "#FFFFFF",
        brightYellow: "#FFFF00",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.15)", // Light shadow
        DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)", // Medium shadow
        md: "0 6px 12px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15)", // Stronger medium shadow
        lg: "0 12px 24px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.15)", // Strong shadow
        xl: "0 20px 35px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.2)", // Very strong shadow
        "2xl": "0 25px 50px rgba(0, 0, 0, 0.5)", // Extra large shadow for a more dramatic effect
        inner: "inset 0 2px 4px rgba(0, 0, 0, 0.2)", // Inner shadow
        none: "none", // No shadow
      },
      zIndex: {
        max: "99999", // Custom high z-index
      },
      animation: {
        scroll: "scroll 14s linear infinite", // Custom scroll animation
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" }, // Start from right
          "100%": { transform: "translateX(-100%)" }, // Move to the left
        },
      },
    },
  },
  plugins: [],
};
