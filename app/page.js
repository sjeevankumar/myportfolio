// app/page.js
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
import Blog from "../components/Blog"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  )
}
