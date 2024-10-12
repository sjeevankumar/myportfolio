"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "ReactJS", img: "/assets/react.png" }, // Replace with actual image paths
  // { name: "Next.js", img: "/assets/nextjs.svg" },
  { name: "JavaScript", img: "/assets/javascript.png" },
  { name: "HTML", img: "/assets/html.png" },
  { name: "CSS", img: "/assets/css.png" },
  { name: "TypeScript", img: "/assets/typescript.png" },
  { name: "Tailwind CSS", img: "/assets/tailwind.png" },
  { name: "Redux", img: "/assets/redux.png" },
  { name: "Node.js", img: "/assets/node.png" },
  // Add more skills as needed
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary dark:text-accent mb-10 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex justify-center items-center"
            >
              <div className="sphere">
                <motion.img
                  src={skill.img}
                  alt={skill.name}
                  className="hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain"
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 1, ease: "linear" },
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .sphere {
          width: 150px; /* Adjust size as needed */
          height: 150px; /* Adjust size as needed */
          border-radius: 50%;
          // background-color: rgba(255, 255, 255, 0.2); /* Light background */
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          position: relative;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px); /* Adjust float height */
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
