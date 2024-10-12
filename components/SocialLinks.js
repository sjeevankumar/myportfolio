import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaGlobe,
} from "react-icons/fa"

const SocialLinks = () => {
  return (
    <ul className="space-y-2">
      <li className="flex items-center">
        <FaEnvelope className="mr-2 text-primary dark:text-accent" />{" "}
        <a
          href="mailto:sjeevankumar89@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
        >
          sjeevankumar89@gmail.com
        </a>
      </li>
      <li className="flex items-center">
        <FaPhone className="mr-2 text-primary dark:text-accent" />{" "}
        <span className="text-gray-700 dark:text-gray-300">+91 6281555362</span>
      </li>
      <li className="flex items-center">
        <FaLinkedin className="mr-2 text-primary dark:text-accent" />{" "}
        <a
          href="https://www.linkedin.com/in/s-jeevan-kumar-03504413a/"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
      </li>
      <li className="flex items-center">
        <FaGithub className="mr-2 text-primary dark:text-accent" />{" "}
        <a
          href="https://github.com/sjeevankumar"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
        >
          Github
        </a>
      </li>
      <li className="flex items-center">
        <FaCode className="mr-2 text-primary dark:text-accent" />{" "}
        <a
          href="https://leetcode.com/u/14qVsLBzfo/"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
        >
          Leetcode
        </a>
      </li>
      <li className="flex items-center">
        <FaGlobe className="mr-2 text-primary dark:text-accent" />{" "}
        <a
          href="https://portfolio-c778.onrender.com"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
        >
          Portfolio
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
