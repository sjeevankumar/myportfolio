"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-20 bg-lightBg dark:bg-darkBg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30" />
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 relative z-10 px-5 lg:px-0">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary dark:text-accent mb-4">
            A Glimpse Into My Career
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a dedicated Frontend Engineer with over 2.6 years of experience
            in building responsive and dynamic web applications. My expertise
            lies in ReactJS, Next.js, and TypeScript, enabling me to create
            scalable and maintainable codebases. I have a strong foundation in
            UI/UX principles, ensuring that the applications I develop are not
            only functional but also provide an excellent user experience.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I thrive in collaborative environments and am passionate about
            continuous learning and adopting new technologies to enhance project
            quality. Whether it's migrating legacy systems, optimizing
            performance, or integrating secure APIs, I approach every challenge
            with enthusiasm and a commitment to excellence.
          </p>
          {/* <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition-colors duration-300"
          >
            Let's Connect
          </a> */}
        </motion.div>
        {/* Image */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-auto rounded-lg shadow-lg bg-white dark:bg-darkBg p-5">
            <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">
              My Expertise
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Proficient in technologies like ReactJS, Next.js, TypeScript, and
              more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
