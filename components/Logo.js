"use client"

import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      {/* <Image
        src="/assets/logo.png" // Ensure your logo image is placed in public/assets/
        alt="Jeevan Kumar Logo"
        width={40}
        height={40}
        className="mr-2"
      /> */}
      <span className="text-2xl font-bold text-primary dark:text-accent">
        Jeevan Kumar
      </span>
    </Link>
  )
}

export default Logo
