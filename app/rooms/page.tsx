'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { rooms } from '@/lib/data'
import { ShieldCheck, Check } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function RoomsPage() {
  const room = rooms[0]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c26] text-white text-center">
        <ScrollReveal direction="down" duration={0.8}>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Room & Accommodation
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience timeless comfort and breathtaking mountain views from our private balcony accommodation.
          </p>
        </ScrollReveal>
      </div>

      {/* Room Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf9f5]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" duration={0.6}>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Section */}
              <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full bg-slate-100">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#ffcc00] text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  New Property Deal
                </div>
                <div className="absolute bottom-4 left-4 bg-[#0b0c26]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10">
                  👤 Price for {room.capacity} Guests
                </div>
              </div>

              {/* Specs & Info Section */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b0c26] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {room.name}
                  </h2>

                  <p className="text-sm font-semibold text-slate-700 mb-4 bg-slate-100 py-1.5 px-3 rounded-lg w-fit">
                    Beds: 1 twin bed 🛏 , 2 full beds 🛏🛏
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Spec Badges Grid */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Included Amenities & Views</h3>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((badge, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Policies Card */}
                  <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 space-y-2">
                    <div className="font-extrabold text-[#0b0c26] text-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> Pay at Property
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 font-medium">
                      <Check className="w-4 h-4 stroke-[3]" /> No prepayment needed – pay at the property
                    </div>
                  </div>
                </div>

                {/* Price & Reserve Button */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Price for 1 night:</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-slate-400 line-through text-base font-semibold">
                        US${room.originalPrice}
                      </span>
                      <span className="text-3xl font-black text-[#0b0c26]">
                        US${room.price}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/booking?type=room&roomType=standard"
                    className="bg-[#006ce4] hover:bg-[#0057b8] text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all text-center text-base hover:scale-105"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}


