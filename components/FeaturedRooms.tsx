'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, Wifi, Mountain, Trees, Radio, Phone, Clock, ShieldCheck, Check } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const doubleMountainRoom = {
  id: '1',
  name: 'Double Room with Mountain View',
  price: 22,
  originalPrice: 26,
  beds: 'Beds: 1 twin bed 🛏 , 2 full beds 🛏🛏',
  category: 'standard',
  image: '/images/room/WhatsApp%20Image%202026-06-26%20at%2010.09.15%20PM.jpeg',
  capacity: 5,
  size: '20 m²',
  description: 'Enjoy panoramic mountain views, lush garden greenery, and private balcony seating. Accommodates up to 5 guests with 1 twin bed and 2 full beds.',
  specBadges: [
    '20 m²',
    'Radio',
    'Wardrobe or closet',
    'Telephone',
    'Wake-up service/Alarm clock',
    'Balcony',
    'Garden view',
    'Mountain view',
    'Free Wifi',
  ],
}

export default function FeaturedRooms() {
  return (
    <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf9f5]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="down" duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#0b0c26]" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Accommodation
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Comfortable, spacious accommodation featuring scenic mountain views, private balcony, and pay at property convenience.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.6}>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left Image Section */}
            <div className="md:col-span-5 relative min-h-[300px] md:min-h-full bg-slate-100">
              <Image
                src={doubleMountainRoom.image}
                alt={doubleMountainRoom.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 bg-[#ffcc00] text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                New Property Deal
              </div>
              <div className="absolute bottom-4 left-4 bg-[#0b0c26]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10">
                👤 Price for 5 Guests
              </div>
            </div>

            {/* Right Content & Badges Section */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Room Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b0c26] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {doubleMountainRoom.name}
                </h3>

                {/* Beds Info */}
                <p className="text-sm font-semibold text-slate-700 mb-4 bg-slate-100 py-1.5 px-3 rounded-lg w-fit">
                  {doubleMountainRoom.beds}
                </p>

                {/* Spec Badges Grid */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {doubleMountainRoom.specBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Policy Highlights Card */}
                <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 space-y-2">
                  <div className="font-extrabold text-[#0b0c26] text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Pay at Property
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <Check className="w-4 h-4 stroke-[3]" /> No prepayment needed – pay at the property
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Price for 1 night:</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 line-through text-base font-semibold">
                      US${doubleMountainRoom.originalPrice}
                    </span>
                    <span className="text-2xl font-black text-[#0b0c26]">
                      US${doubleMountainRoom.price}
                    </span>
                  </div>
                </div>

                <Link
                  href="/booking?type=room&roomType=standard"
                  className="bg-[#006ce4] hover:bg-[#0057b8] text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all text-center text-base hover:scale-105"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}


