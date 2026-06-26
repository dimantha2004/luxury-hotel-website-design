'use client'

import Image from 'next/image'
import Link from 'next/link'

const tourImages = [
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.53%20PM.jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.54%20PM%20(1).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.54%20PM%20(2).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.54%20PM.jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.55%20PM%20(1).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.55%20PM%20(2).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.55%20PM.jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.56%20PM%20(1).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.56%20PM%20(2).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.56%20PM.jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.57%20PM%20(1).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.57%20PM.jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.58%20PM%20(1).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.58%20PM%20(2).jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.58%20PM.jpeg',
  '/images/tour/WhatsApp%20Image%202026-06-26%20at%2010.37.59%20PM.jpeg',
]

export default function Tours() {
  return (
    <section id="tours" className="w-full py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Explore Sri Lanka With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty of Sri Lanka through our curated collection of destinations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {tourImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-muted group">
              <Image
                src={src}
                alt={`Tour destination ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/booking?type=tour"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  )
}
