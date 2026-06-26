'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { menuItems } from '@/lib/data'

export default function DiningPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('mains')

  const filteredItems = menuItems.filter(item => item.category === selectedCategory)

  const categories = [
    { value: 'appetizers', label: 'Appetizers' },
    { value: 'mains', label: 'Main Courses' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'beverages', label: 'Beverages' },
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Fine Dining
        </h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Indulge in culinary excellence crafted by our world-renowned chefs using the finest ingredients.
        </p>
      </div>

      {/* Menu Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
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

          {/* Menu Items */}
          <div className="space-y-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="flex gap-6 bg-card p-6 rounded shadow hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden rounded bg-muted hidden sm:block">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.name}
                    </h3>
                    <p className="text-accent text-xl font-bold">${item.price}</p>
                  </div>
                  
                  <p className="text-foreground/70 mb-4">
                    {item.description}
                  </p>

                  <button className="bg-accent text-accent-foreground px-6 py-2 rounded hover:opacity-90 transition-opacity font-semibold">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Experience Culinary Excellence
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our award-winning restaurant features a diverse menu crafted by our executive chefs, showcasing the finest seasonal ingredients and international cuisine. Join us for an unforgettable gastronomic journey.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-accent mb-2">5★</p>
              <p>Award-Winning Chef</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">∞</p>
              <p>Michelin Star Cuisine</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">100+</p>
              <p>Wine Selection</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
