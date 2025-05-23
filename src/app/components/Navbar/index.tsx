'use client'
import Image from 'next/image'
import { useState } from 'react'
import { X, Menu } from 'lucide-react' // Gunakan ikon dari lucide-react (instalasi: npm i lucide-react)

const menuNav = [
  { name: 'Partner', href: '#partner' },
  { name: 'Product', href: '#product' },
  { name: 'About', href: '#about' },
  { name: 'Journal', href: '#journal' }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -180 // contoh offset 80px untuk navbar fixed
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed w-full top-0 z-50 shadow-2xl shadow-black/50">
      <div className="bg-[#5B1312] tracking-[10px] pty-2 px-2 lg:py-3.5 text-center text-xs lg:text-sm text-white">
        FREE SHIPPING ALL OVER INDONESIA
      </div>
      <nav className="px-3 lg:px-5 py-1 lg:py-3 bg-[#F5F1E8] relative">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-10">
            <Image
              src="/logo/roasted-coffee-transparent-fit.png"
              alt="Logo Roasted Coffee House"
              width={48}
              height={48}
            />
            <ul className="hidden lg:flex space-x-9">
              {menuNav.map(({ name, href }, i) => {
                const id = href.replace('#', '')
                return (
                  <a
                    key={i}
                    href={href}
                    onClick={e => {
                      e.preventDefault()
                      setIsOpen(false)
                      scrollToSection(id)
                    }}
                    className="text-[#5B1312] hover:text-gray-300"
                  >
                    {name}
                  </a>
                )
              })}
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
