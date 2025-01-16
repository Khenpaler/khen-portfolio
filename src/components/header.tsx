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
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);  // Show button after scrolling down 300px
      } else {
        setIsVisible(false); // Hide button when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveLink(''); // Reset active link when going to top
  };

  // Update active link based on scroll position
  const handleSetActiveLink = (section : any) => {
    setActiveLink(section);
  };

  // Reset active link when clicking the logo
  const handleLogoClick = () => {
    setActiveLink('');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl hover:text-green-500 transition-colors font-bold"
            onClick={handleLogoClick} // Reset active link on logo click
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
              {['About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`}
                  className={`
                    text-2xl sm:text-xl md:text-lg lg:text-xl xl:text-2xl relative group 
                    ${activeLink === item ? 'text-green-500' : 'hover:text-green-500'}  // Highlight active link
                  `}
                  onClick={() => {
                    handleSetActiveLink(item);
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {isVisible && (
        <button
          onClick={() => {
            scrollToTop();
            setActiveLink(''); // Reset active link when going back to top
          }}
          className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-400 transition-colors"
        >
          ↑
        </button>
      )}
    </header>
  )
}