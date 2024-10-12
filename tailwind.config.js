module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF", // Electric Blue
        secondary: "#6A0DAD", // Rich Purple
        accent: "#00FFFF", // Bright Cyan
        sunset: "#FF4500", // Sunset Orange
        lightBg: "#F5F5F5", // Soft Gray
        darkBg: "#0A192F", // Deep Navy
        darkText: "#8892B0", // Slate Gray
        brightYellow: "#FFD700", // Bright Yellow
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern and clean font
        display: ["Montserrat", "sans-serif"], // Bold and versatile for headings
      },
    },
  },
  plugins: [],
}
