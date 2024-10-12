"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { FaTimes } from "react-icons/fa"

const Modal = ({ project, onClose }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <motion.div
        className="bg-white dark:bg-darkBg rounded-lg overflow-hidden max-w-3xl w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent focus:outline-none"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <FaTimes size={24} />
        </button>
        <img
          src={project.image}
          alt={`${project.title} Image`}
          width={800}
          height={450}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3
            id="modal-title"
            className="text-2xl font-bold text-primary dark:text-accent mb-4"
          >
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <div className="flex gap-2">
            {project?.liveLink !== "" && (
              <button className="px-6 py-3 bg-secondary text-white rounded-full shadow-lg hover:bg-primary transition-colors duration-300">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Live
                </a>
              </button>
            )}
            {project?.githubLink !== "" && (
              <button className="px-6 py-3 bg-secondary text-white rounded-full shadow-lg hover:bg-primary transition-colors duration-300">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
