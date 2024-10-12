"use client"

import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()

  const onSubmit = async (data) => {
    // Replace with your form submission logic (e.g., EmailJS, Formspree)
    console.log(data)
    // Simulate form submission delay
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve()
        reset()
      }, 2000)
    )
  }

  return (
    <section id="contact" className="py-20 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary dark:text-accent mb-10 text-center">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto">
          {isSubmitSuccessful ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-500"
            >
              Thank you for reaching out! I'll get back to you soon.
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className={`w-full p-3 border rounded-lg focus:outline-none ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  className={`w-full p-3 border rounded-lg focus:outline-none h-32 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
