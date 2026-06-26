'use client'

import { useState } from 'react'
import Image from 'next/image'
import { tours } from '@/lib/data'
import { Tour } from '@/lib/types'
import { MapPin, Clock, DollarSign, X } from 'lucide-react'

type TourCategory = 'all' | 'beach' | 'wildlife' | 'cultural' | 'hill-country' | 'adventure' | 'family'

const CATEGORY_LABELS: Record<TourCategory, string> = {
  all: 'All Tours',
  beach: 'Beach Tours',
  wildlife: 'Wildlife Safaris',
  cultural: 'Cultural Tours',
  'hill-country': 'Hill Country',
  adventure: 'Adventure Tours',
  family: 'Family Tours',
}

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState<TourCategory>('all')
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)

  const filteredTours = selectedCategory === 'all'
    ? tours
    : tours.filter((tour) => tour.category === selectedCategory)

  return (
    <section id="tours" className="w-full py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Explore Sri Lanka With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty of Sri Lanka through carefully organized tours covering beaches, mountains, wildlife, cultural heritage sites, and adventure destinations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as TourCategory)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === key
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-card text-foreground border border-border hover:border-secondary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-primary mb-2">{tour.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{tour.description}</p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-secondary">
                  <DollarSign className="h-5 w-5" />
                  From ${tour.startingPrice}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
                  >
                    View Details
                  </button>
                  <button className="flex-1 border-2 border-secondary text-secondary py-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors font-medium">
                    Book Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Details Modal */}
        {selectedTour && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-card rounded-lg shadow-2xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
                <h2 className="text-3xl font-serif text-primary">{selectedTour.name}</h2>
                <button
                  onClick={() => setSelectedTour(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={selectedTour.image}
                    alt={selectedTour.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Key Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Duration</div>
                    <div className="flex items-center gap-2 font-semibold">
                      <Clock className="h-4 w-4 text-secondary" />
                      {selectedTour.duration}
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Price From</div>
                    <div className="flex items-center gap-2 font-semibold text-secondary">
                      <DollarSign className="h-4 w-4" />
                      ${selectedTour.startingPrice}
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Transportation</div>
                    <div className="font-semibold">{selectedTour.transportation}</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Travel Time</div>
                    <div className="font-semibold">{selectedTour.travelTime}</div>
                  </div>
                </div>

                {/* Itinerary */}
                <div>
                  <h3 className="text-xl font-serif text-primary mb-4">Itinerary</h3>
                  <ol className="space-y-2">
                    {selectedTour.itinerary.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Places Covered */}
                <div>
                  <h3 className="text-xl font-serif text-primary mb-4">Places Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTour.placesCovered.map((place, index) => (
                      <div key={index} className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>{place}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Services */}
                <div>
                  <h3 className="text-xl font-serif text-primary mb-4">Included Services</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedTour.includedServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meals & Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Meals Included</div>
                    <div className="font-semibold">{selectedTour.mealsIncluded}</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Pickup & Dropoff</div>
                    <div className="font-semibold">{selectedTour.pickupDropoff}</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">What to Bring</div>
                    <div className="text-sm space-y-1">
                      {selectedTour.whatToBring.slice(0, 3).map((item, index) => (
                        <div key={index}>{item}</div>
                      ))}
                      {selectedTour.whatToBring.length > 3 && (
                        <div className="text-secondary">+{selectedTour.whatToBring.length - 3} more</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  <button className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold">
                    Book This Tour
                  </button>
                  <button
                    onClick={() => setSelectedTour(null)}
                    className="flex-1 border-2 border-primary text-primary py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
