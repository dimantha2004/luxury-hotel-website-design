'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { X } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const roomImages = [
  { id: 'r1', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.12%20PM.jpeg', alt: 'Room View 1' },
  { id: 'r2', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.13%20PM.jpeg', alt: 'Room View 2' },
  { id: 'r3', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.14%20PM.jpeg', alt: 'Room View 3' },
  { id: 'r4', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.15%20PM%20(1).jpeg', alt: 'Room View 4' },
  { id: 'r5', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.15%20PM%20(2).jpeg', alt: 'Room View 5' },
  { id: 'r6', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.15%20PM.jpeg', alt: 'Room View 6' },
  { id: 'r7', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.16%20PM%20(1).jpeg', alt: 'Room View 7' },
  { id: 'r8', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.16%20PM%20(2).jpeg', alt: 'Room View 8' },
  { id: 'r9', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.16%20PM.jpeg', alt: 'Room View 9' },
  { id: 'r10', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.17%20PM%20(1).jpeg', alt: 'Room View 10' },
  { id: 'r11', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.17%20PM.jpeg', alt: 'Room View 11' },
  { id: 'r12', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.18%20PM%20(1).jpeg', alt: 'Room View 12' },
  { id: 'r13', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.18%20PM%20(2).jpeg', alt: 'Room View 13' },
  { id: 'r14', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.18%20PM.jpeg', alt: 'Room View 14' },
  { id: 'r15', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.19%20PM%20(1).jpeg', alt: 'Room View 15' },
  { id: 'r16', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.19%20PM%20(2).jpeg', alt: 'Room View 16' },
  { id: 'r17', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.19%20PM.jpeg', alt: 'Room View 17' },
  { id: 'r18', src: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.20%20PM.jpeg', alt: 'Room View 18' }
]

const tourImages = [
  { id: 't1', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.53%20PM.jpeg', alt: 'Tour Destination 1' },
  { id: 't2', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.54%20PM%20(1).jpeg', alt: 'Tour Destination 2' },
  { id: 't3', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.54%20PM%20(2).jpeg', alt: 'Tour Destination 3' },
  { id: 't4', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.54%20PM.jpeg', alt: 'Tour Destination 4' },
  { id: 't5', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.55%20PM%20(1).jpeg', alt: 'Tour Destination 5' },
  { id: 't6', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.55%20PM%20(2).jpeg', alt: 'Tour Destination 6' },
  { id: 't7', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.55%20PM.jpeg', alt: 'Tour Destination 7' },
  { id: 't8', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.56%20PM%20(1).jpeg', alt: 'Tour Destination 8' },
  { id: 't9', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.56%20PM%20(2).jpeg', alt: 'Tour Destination 9' },
  { id: 't10', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.56%20PM.jpeg', alt: 'Tour Destination 10' },
  { id: 't11', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.57%20PM%20(1).jpeg', alt: 'Tour Destination 11' },
  { id: 't12', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.57%20PM.jpeg', alt: 'Tour Destination 12' },
  { id: 't13', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.58%20PM%20(1).jpeg', alt: 'Tour Destination 13' },
  { id: 't14', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.58%20PM%20(2).jpeg', alt: 'Tour Destination 14' },
  { id: 't15', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.58%20PM.jpeg', alt: 'Tour Destination 15' },
  { id: 't16', src: '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.59%20PM.jpeg', alt: 'Tour Destination 16' }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c26] text-white text-center">
        <ScrollReveal direction="down" duration={0.8}>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Gallery
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore the stunning beauty and luxury of Thilina travels & stay through our collection of photographs.
          </p>
        </ScrollReveal>
      </div>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Rooms Gallery */}
          <div>
            <ScrollReveal direction="left" duration={0.6}>
              <h2 className="text-3xl font-bold mb-8 text-[#0b0c26] border-b-2 border-[#ffcc00] pb-4 inline-block pr-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Rooms
              </h2>
            </ScrollReveal>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {roomImages.map((image, index) => (
                <ScrollReveal
                  key={image.id}
                  direction="scale"
                  delay={(index % 6) * 0.06}
                  duration={0.5}
                >
                  <div
                    className="break-inside-avoid cursor-pointer group"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Tours Gallery */}
          <div>
            <ScrollReveal direction="left" duration={0.6}>
              <h2 className="text-3xl font-bold mb-8 text-primary border-b border-border pb-4 pt-8" style={{ fontFamily: 'var(--font-heading)' }}>
                Tours
              </h2>
            </ScrollReveal>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {tourImages.map((image, index) => (
                <ScrollReveal
                  key={image.id}
                  direction="scale"
                  delay={(index % 6) * 0.06}
                  duration={0.5}
                >
                  <div
                    className="break-inside-avoid cursor-pointer group"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-[80vh]" onClick={e => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
