"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Modal from "./Modal"

const projects = [
  {
    title: "ChatGPT Clone",
    description:
      "Built a ChatGPT clone using React, SCSS, Node.js, MongoDB, and Gemini API for real-time AI conversations. Integrated ImageKit for image storage and Clerk for secure authentication.",
    image: "/assets/chatgpt.jpg", // Replace with your image
    githubLink: "https://github.com/sjeevankumar/chatgpt-clone",
    liveLink: "",
  },
  {
    title: "School Management System",
    description:
      "Developed a comprehensive school management system using Next.js, Tailwind, and Recharts for data visualization. Utilized React Hook Form for dynamic and efficient form handling across various modules.",
    image: "/assets/school-management.png", // Replace with your image
    githubLink: "https://github.com/sjeevankumar/school-management-dashboard",
    liveLink: "https://schoolsimplify.onrender.com/admin",
  },
  // Add more projects as needed
]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary dark:text-accent mb-10 text-center">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer group"
              onClick={() => openModal(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedProject && (
            <Modal project={selectedProject} onClose={closeModal} />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
