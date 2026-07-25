'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { rooms } from '@/lib/data'
import { Star } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredRooms = selectedCategory === 'all' 
    ? rooms 
    : rooms.filter(room => room.category === selectedCategory)

  const categories = [
    { value: 'all', label: 'All Rooms' },
    { value: 'suite', label: 'Suites' },
    { value: 'deluxe', label: 'Deluxe' },
    { value: 'standard', label: 'Standard' },
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c26] text-white text-center">
        <ScrollReveal direction="down" duration={0.8}>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Rooms
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose from our collection of luxuriously appointed rooms, each designed with meticulous attention to comfort and elegance.
          </p>
        </ScrollReveal>
      </div>

      {/* Filters and Rooms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <ScrollReveal direction="up" delay={0.2} duration={0.6}>
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.value
                      ? 'bg-[#ffcc00] text-slate-950 shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Rooms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room, index) => (
              <ScrollReveal
                key={room.id}
                direction="up"
                delay={(index % 3) * 0.12}
                duration={0.6}
              >
                <div
                  className="rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                        {room.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-4 text-sm text-foreground/60">
                        <span>{room.capacity} Guests</span>
                        <span>•</span>
                        <span>{room.sqft} sqft</span>
                      </div>

                      <p className="text-foreground/70 mb-4">
                        {room.description}
                      </p>

                      {/* Amenities */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-foreground mb-2">Amenities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity) => (
                            <span
                              key={amenity}
                              className="inline-block text-xs bg-muted text-foreground px-2 py-1 rounded"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    {/* Rating and Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <div className="text-right">
                        <p className="text-accent text-xl font-bold">${room.price}</p>
                        <p className="text-foreground/50 text-xs">per night</p>
                      </div>
                    </div>

                    {/* Button */}
                    <Link
                      href={`/booking?type=room&roomType=${room.category}`}
                      className="block text-center w-full mt-4 bg-primary text-primary-foreground py-2 rounded hover:opacity-90 transition-opacity font-semibold"
                    >
                      Book Room
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

