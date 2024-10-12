"use client"

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon className="text-gray-700 dark:text-gray-300" />
      ) : (
        <FaSun className="text-yellow-400" />
      )}
    </button>
  )
}

export default ThemeSwitcher
