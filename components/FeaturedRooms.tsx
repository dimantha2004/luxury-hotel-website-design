import Image from 'next/image'
import Link from 'next/link'
import { rooms } from '@/lib/data'
import { Star } from 'lucide-react'

export default function FeaturedRooms() {
  const featuredRooms = rooms.slice(0, 3)

  return (
    <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured Rooms
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Discover our most luxurious accommodations, each designed to provide the ultimate in comfort and elegance.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="group rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-muted">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-background">
                <h3 className="text-2xl font-bold mb-2 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  {room.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">{room.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-block text-xs bg-muted text-foreground px-3 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-6 border-t border-border">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-accent text-lg font-bold">${room.price}</p>
                    <p className="text-foreground/50 text-xs">per night</p>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full mt-6 bg-primary text-primary-foreground py-2 rounded hover:opacity-90 transition-opacity font-semibold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/rooms" className="border-2 border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors font-semibold inline-block">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  )
}
