'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    // Handle scroll-to-top button visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Reset active link when at the very top of the page
      if (window.scrollY === 0) {
        setActiveLink('')
      }
    }

    // Highlight active link based on scrolling
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id
          setActiveLink(id.charAt(0).toUpperCase() + id.slice(1))
        }
      },
      { threshold: 0.4 } // Trigger when 60% of the section is visible
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setActiveLink('') // Reset active link when going to top
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl hover:text-green-500 transition-colors font-bold"
            onClick={() => setActiveLink('')} // Reset active link on logo click
          >
            <Image 
              src="./k_logo.png"
              alt="Logo"
              width={150} 
              height={40}
              className="object-contain w-32 h-8 sm:w-24 sm:h-6 md:w-40 md:h-10 lg:w-44 lg:h-12 xl:w-48 xl:h-14"
            />
          </Link>
          <button
            className="md:hidden z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <div className={`
            fixed inset-0 bg-black/95 backdrop-blur-md z-10 transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:static md:bg-transparent md:translate-x-0 md:backdrop-blur-none
          `}>
            <div className="flex flex-col items-center justify-center h-full space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-end md:space-x-8">
              {['about', 'skills', 'portfolio', 'contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`
                    text-2xl sm:text-xl md:text-lg lg:text-xl xl:text-2xl relative group 
                    ${activeLink.toLowerCase() === item ? 'text-green-500' : 'hover:text-green-500'}  // Highlight active link
                  `}
                  onClick={() => {
                    setActiveLink(item)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-400 transition-colors"
        >
          ↑
        </button>
      )}
    </header>
  )
}