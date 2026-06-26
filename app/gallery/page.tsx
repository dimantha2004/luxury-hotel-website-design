'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { galleryImages } from '@/lib/data'
import { X } from 'lucide-react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'rooms', label: 'Rooms' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'amenities', label: 'Amenities' },
    { value: 'views', label: 'Views' },
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Gallery
        </h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Explore the stunning beauty and luxury of La Villa Banya through our collection of photographs.
        </p>
      </div>

      {/* Filter and Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded font-semibold transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(image.image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={image.image}
                    alt={image.title}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                      {image.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
