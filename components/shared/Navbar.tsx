'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'
import { Menu, X } from 'lucide-react'
import Social from '../common/Social'
import Tamim from "@/public/logo.jpg"
import Image from 'next/image'
import { BorderBeam } from '../ui/border-beam'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 10)

      const isMobileOrTablet = window.innerWidth <= 1024

      if (isMobileOrTablet) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNavbar(false)
        } else {
          setShowNavbar(true)
        }
      } else {
        setShowNavbar(true) 
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
        transition-all duration-500 ease-in-out
        w-[350px] sm:w-xl  md:w-2xl lg:w-4xl xl:w-7xl rounded-2xl border backdrop-blur-md
        ${isScrolled ? 'border-border shadow-lg' : ''}
        sm:px-6 lg:px-28 md:rounded-full md:border md:shadow-md
        ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'}
        `}
      >
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/">
              <div className="button flex">
                {['S','a','y','e','d',' ','A','n','w','a','r'].map((ch, i) => (
                  <div key={i} className="box">{ch}</div>
                ))}
              </div>
            </Link>

            {/* Right Side - Theme toggler + Menu */}
            <div className="flex items-center space-x-4 z-60">
              <AnimatedThemeToggler />
              <button
                className="relative w-8 h-8 z-60 focus:outline-none flex items-center justify-center transition-transform duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-700 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 visible backdrop-blur-md bg-background/95' 
          : 'opacity-0 invisible'
      }`}>
        <div className="flex items-center justify-center min-h-screen w-full">
         
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <nav className="flex flex-col items-center justify-center space-y-8">

              {/* short navbar info */}
              <div className="flex flex-col items-center text-center space-y-4">
                  <BorderBeam />
                  <div className="relative w-28 h-28 rounded-full">
                    <Image 
                      src={Tamim} 
                      alt="Tamim Logo" 
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-full"
                    />
                  </div>
                <p className="italic font-medium text-lg">
                  Sayed Anwar
                </p>
                <p className="italic font-light text-base max-w-md">
                   Let us build something amazing together
                </p>
              </div>

              {menuItems.map((item, index) => (
                <div key={item.href} className="overflow-hidden">
                  
                  <Link
                    href={item.href}
                    className="relative text-4xl md:text-6xl font-bold hover:text-primary transition-all duration-500 group"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(100%)',
                      opacity: isMenuOpen ? 1 : 0,
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <span className="relative inline-block overflow-hidden">
                      <span className="inline-block transition-transform duration-700 ease-out group-hover:translate-x-[-105%]">
                        {item.label}
                      </span>
                      <span className="absolute inset-0 inline-block transition-transform duration-700 ease-out translate-x-[105%] group-hover:translate-x-0">
                        {item.label}
                      </span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#bae547] transition-all duration-700 ease-out group-hover:w-full" />
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer Message */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>      
          <div>
            <Social />
          </div>
        </div>
      </div>
    </>
  )
}
