module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
        secondary: "#6A0DAD",
        accent: "#00FFFF",
        sunset: "#FF4500",
        lightBg: "#F5F5F5",
        darkBg: "#0A192F",
        darkText: "#8892B0",
        brightYellow: "#FFD700",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
