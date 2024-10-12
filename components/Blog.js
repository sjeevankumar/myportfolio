"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const blogPosts = [
  {
    title: "Optimizing React Performance",
    excerpt:
      "Learn how to enhance the performance of your React applications with these proven techniques.",
    link: "/blog/optimizing-react-performance", // Create corresponding pages
  },
  {
    title: "A Guide to Next.js App Router",
    excerpt:
      "Understanding the new App Router in Next.js and how to leverage its features for your projects.",
    link: "/blog/guide-to-nextjs-app-router",
  },
  // Add more blog posts as needed
]

const Blog = () => {
  return (
    <section className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary dark:text-accent mb-10 text-center">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <Link
                href={post.link}
                className="text-primary dark:text-accent hover:underline"
              >
                Read More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
