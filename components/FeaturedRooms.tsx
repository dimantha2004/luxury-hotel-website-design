'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

const featuredRooms = [
  {
    id: '1',
    name: 'Presidential Suite',
    price: 850,
    beds: '1 King Bed, 1 Sofa Bed',
    category: 'suite',
    image: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.15%20PM.jpeg',
    description: 'Experience ultimate luxury with our spacious Presidential Suite featuring panoramic views, premium furnishings, and a private lounge.'
  },
  {
    id: '2',
    name: 'Deluxe Ocean View',
    price: 450,
    beds: '1 King Bed',
    category: 'deluxe',
    image: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.16%20PM%20(2).jpeg',
    description: 'Elegantly appointed rooms with stunning ocean views, premium amenities, and a private balcony.'
  },
  {
    id: '3',
    name: 'Standard Cozy Room',
    price: 250,
    beds: '1 Queen Bed',
    category: 'standard',
    image: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.19%20PM%20(1).jpeg',
    description: 'Comfortable and fully equipped room, offering modern essentials, workspace, and a relaxing atmosphere.'
  }
]

export default function FeaturedRooms() {
  return (
    <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured Rooms
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Discover our most luxurious accommodations, each designed to provide the ultimate in comfort and elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-background flex flex-col justify-between border border-border"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                    {room.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm text-foreground/60 font-semibold bg-muted px-3 py-1.5 rounded-md w-fit">
                    <span>{room.beds}</span>
                  </div>

                  <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                    {room.description}
                  </p>
                </div>

                <div>
                  {/* Rating and Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-border mb-4">
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
                    className="block text-center w-full bg-primary text-primary-foreground py-2.5 rounded font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Room
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/rooms"
            className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-lg"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  )
}
