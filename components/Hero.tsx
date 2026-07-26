'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen pt-16 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Thilina travels & stay luxury hotel entrance"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Navy Overlay */}
      <div className="absolute inset-0 bg-[#0b0c26]/60 pt-16" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="text-[#ffcc00] uppercase tracking-widest text-xs sm:text-sm font-extrabold mb-3 inline-block drop-shadow-sm">
              Welcome to Sri Lanka
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 text-balance tracking-tight text-white drop-shadow-md"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Thilina <span className="text-[#ffcc00]">travels & stay</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
            className="text-xl sm:text-2xl lg:text-3xl mb-10 text-slate-100 text-balance max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm"
          >
            Experience Timeless Luxury and Exceptional Hospitality
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/booking?type=room"
              className="w-full sm:w-auto bg-[#ffcc00] hover:bg-[#e6b800] text-slate-950 font-extrabold py-4 px-8 rounded-full shadow-xl transition-all text-base hover:scale-105"
            >
              Book Your Stay
            </Link>
            <Link
              href="/#tours"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-2 border-[#ffcc00] text-[#ffcc00] font-extrabold py-3.5 px-8 rounded-full shadow-xl transition-all text-base backdrop-blur-sm hover:scale-105"
            >
              Explore Tours
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


