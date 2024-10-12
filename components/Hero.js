"use client"

import { useEffect, useState } from "react"
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaMailBulk,
  FaMailchimp,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

// Type Animation Component
const TypeAnimation = ({ texts }) => {
  const [currentText, setCurrentText] = useState("")
  const [index, setIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index]
      if (isTyping) {
        if (currentText.length < fullText.length) {
          setCurrentText((prev) => fullText.slice(0, prev.length + 1))
        } else {
          setTimeout(() => setIsTyping(false), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText((prev) => fullText.slice(0, prev.length - 1))
        } else {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length)
          setIsTyping(true)
        }
      }
    }
    const typingInterval = setInterval(handleTyping, 100)
    return () => clearInterval(typingInterval)
  }, [currentText, isTyping, index, texts])

  return (
    <h2 className="text-3xl font-semibold text-gray-100 dark:text-gray-300">
      {`I am a ${currentText}`}
    </h2>
  )
}

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaFilePdf />,
      url: "https://drive.google.com/file/d/12Fmte2FbR-eSryNL95tw96lICrMhNv9Z/view?usp=drive_link",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/s-jeevan-kumar-03504413a/",
    },
    { icon: <FaGithub />, url: "https://github.com/sjeevankumar" },
    { icon: <FaCode />, url: "https://leetcode.com/u/14qVsLBzfo/" },
    {
      icon: <FaEnvelope />,
      url: "mailto:sjeevankumar89@gmail.com",
    },
  ]

  const animatedTexts = ["Software Engineer", "Frontend Engineer", "Leetcoder"]

  return (
    <section className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-10 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Hi, I am <br />
          <span className="text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Jeevan
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <TypeAnimation texts={animatedTexts} />
        </motion.div>
        {/* Social Links */}
        <motion.div
          className="flex space-x-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl bg-white text-primary dark:bg-gray-800 dark:text-accent p-3 rounded-full shadow-lg hover:bg-secondary dark:hover:bg-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative bg-gradient-to-tr from-blue-500 to-purple-500 dark:from-gray-700 dark:to-gray-800">
        {/* Subtle Animated Background Shapes */}
        <motion.div
          className="absolute w-40 h-40 bg-blue-300 rounded-full opacity-20 top-10 left-10 animate-pulse"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.div
          className="absolute w-60 h-60 bg-purple-300 rounded-full opacity-20 bottom-10 right-10 animate-pulse"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        {/* Illustration */}
        <motion.div
          className="relative z-10 w-80 h-80 md:w-96 md:h-96"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/assets/hero-img.svg" // Replace with your illustration SVG
            alt="Illustration of a person coding"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
