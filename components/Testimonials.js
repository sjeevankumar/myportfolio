"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Jane Doe",
    position: "Project Manager at Innominds",
    feedback:
      "Vadde is an exceptional Frontend Engineer. His attention to detail and commitment to quality significantly improved our project outcomes.",
    avatar: "/assets/jane-doe.jpg", // Replace with actual image
  },
  {
    name: "John Smith",
    position: "CTO at Wisestep",
    feedback:
      "Working with Vadde was a pleasure. His expertise in React and Next.js was instrumental in delivering a robust and user-friendly application.",
    avatar: "/assets/john-smith.jpg", // Replace with actual image
  },
  // Add more testimonials as needed
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary dark:text-accent mb-10 text-center">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} Avatar`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "{testimonial.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
