import localFont from "next/font/local"
import "../styles/globals.css"
import { ThemeProvider } from "../context/ThemeContext"
import Header from "../components/Header"
import Footer from "../components/Footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Vadde C S Jeevan Kumar - Frontend Engineer",
  description:
    "Portfolio of Frontend Engineer Vadde C S Jeevan Kumar showcasing projects, skills, and experience.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-darkBg text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="flex-grow container mx-auto p-5 mt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
