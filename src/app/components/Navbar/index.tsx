'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, Menu } from 'lucide-react' // Gunakan ikon dari lucide-react (instalasi: npm i lucide-react)

const menuNav = [
  { name: 'Equipments', href: '#equipments' },
  { name: 'Brew Guide', href: '#brew-guide' },
  { name: 'Locations', href: '#locations' },
  { name: 'About', href: '#about' },
  { name: 'Journal', href: '#journal' },
  { name: 'Menu', href: '#menu' }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed w-full top-0 z-50 shadow-2xl shadow-black/50">
      <div className="bg-[#5B1312] tracking-[10px] py-3.5 text-center text-sm text-white">
        FREE SHIPPING ALL OVER INDONESIA
      </div>
      <nav className="px-5 py-3 bg-[#F5F1E8] relative">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/roasted-coffee-transparent-fit.png"
              alt="Logo Roasted Coffee House"
              width={48}
              height={48}
            />
            <ul className="hidden lg:flex space-x-9">
              {menuNav.map((e, i) => (
                <li key={i}>
                  <a href={e.href} className="text-[#5B1312] hover:text-gray-300">
                    {e.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger / Close Button */}
          <button
            className="lg:hidden text-[#5B1312] z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-[#F5F1E8] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-start p-6 space-y-6 mt-16">
            {menuNav.map((e, i) => (
              <a
                key={i}
                href={e.href}
                onClick={() => setIsOpen(false)}
                className="text-[#5B1312] text-lg font-medium hover:text-gray-400"
              >
                {e.name}
              </a>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
    </div>
  )
}
