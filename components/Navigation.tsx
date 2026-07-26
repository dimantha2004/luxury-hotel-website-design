'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms' },
    { href: '/#tours', label: 'Tours' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c26]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Thilina <span className="text-[#ffcc00]">travels & stay</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-200 hover:text-[#ffcc00] transition-colors text-sm font-semibold tracking-wide"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/booking"
              className="bg-[#ffcc00] hover:bg-[#e6b800] text-slate-950 font-extrabold text-xs uppercase tracking-wider py-2.5 px-5 rounded-full shadow-md transition-all hover:scale-105"
            >
              Book Stay & Tour
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#ffcc00] transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-white/10 pt-4 bg-[#0b0c26]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-slate-200 hover:text-[#ffcc00] transition-colors text-base font-semibold py-1 px-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/booking"
                className="block text-center bg-[#ffcc00] text-slate-950 font-extrabold text-sm py-3 px-6 rounded-full shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Book Stay & Tour
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
