"use client"

import ThemeSwitcher from "./ThemeSwitcher"
import Logo from "./Logo"
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-darkBg shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
          >
            Projects
          </Link>
          {/* <Link
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
          >
            Contact
          </Link> */}
          {/* Theme Switcher */}
          <ThemeSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <ThemeSwitcher />
          <button
            onClick={toggleMenu}
            className="ml-4 text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white dark:bg-darkBg px-5 py-4 shadow-md">
          <ul className="space-y-4">
            <li>
              <Link
                href="#about"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            {/* <li>
              <Link
                href="#contact"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
