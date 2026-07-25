'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

interface TourPackage {
  id: string
  title: string
  badgeTitle: string
  hoverTitle: string
  image: string
  description: string
  link: string
}

const tourPackages: TourPackage[] = [
  {
    id: 'kandy',
    title: 'Kandy City Tour',
    badgeTitle: 'Kandy City Tour',
    hoverTitle: 'Kandy City Tour',
    image: '/tours/kandy.png',
    description:
      'Explore the sacred city of Kandy, home to the Temple of the Tooth Relic, lush botanical gardens, and surrounding picturesque hills.',
    link: '/tours/kandy',
  },
  {
    id: 'pickup',
    title: 'Pickup & Drop',
    badgeTitle: 'Pickup & Drop',
    hoverTitle: 'Airport Pickup & Drop',
    image: '/tours/pickup.png',
    description:
      "Enjoy convenient and reliable pickup and drop-off services, ensuring a seamless travel experience across Sri Lanka's top destinations.",
    link: '/tours/pickup-drop',
  },
  {
    id: 'colombo',
    title: 'Colombo City Tour',
    badgeTitle: 'Colombo City Tour',
    hoverTitle: 'Colombo City Tour',
    image: '/tours/colombo.png',
    description:
      "Discover the vibrant capital of Sri Lanka, featuring historic colonial landmarks, modern skyline views, coastal charm, and lively local markets.",
    link: '/tours/colombo',
  },
  {
    id: 'nuwara-eliya',
    title: 'Nuwara Eliya Tour',
    badgeTitle: 'Nuwara Eliya Tour',
    hoverTitle: 'Nuwara Eliya Hill Tour',
    image: '/tours/nuwara-eliya.png',
    description:
      'Experience Little England with cool mountain climate, rolling tea plantations, cascading waterfalls, and historic colonial charm.',
    link: '/tours/nuwara-eliya',
  },
  {
    id: 'down-south',
    title: 'Down South Tour',
    badgeTitle: 'Down South Tour',
    hoverTitle: 'Down South Coastal Tour',
    image: '/tours/down-south.png',
    description:
      'Unwind along Sri Lanka scenic southern coastline, featuring historic Galle Fort, golden palm beaches, surfing, and stilt fishermen.',
    link: '/tours/down-south',
  },
  {
    id: 'one-day',
    title: 'One Day Tour',
    badgeTitle: 'One Day Tour',
    hoverTitle: '1-Day Express Excursion',
    image: '/tours/one-day.png',
    description:
      'Perfect for quick getaways! Tailored 1-day guided excursions to Sri Lanka key cultural landmarks, wildlife, and natural attractions.',
    link: '/tours/one-day',
  },
  {
    id: 'two-day',
    title: 'Two Day Tour',
    badgeTitle: 'Two Day Tour',
    hoverTitle: '2-Day Escapes',
    image: '/tours/two-day.png',
    description:
      'An immersive 2-day journey covering hill country train rides, tea gardens, ancient fortresses, and memorable local experiences.',
    link: '/tours/two-day',
  },
  {
    id: 'three-weeks',
    title: 'Three Weeks Tour',
    badgeTitle: 'Three Weeks Tour',
    hoverTitle: '3-Week Grand Round Tour',
    image: '/tours/three-weeks.png',
    description:
      'The ultimate Sri Lanka expedition! Explore ancient heritage, wildlife safaris, misty mountains, and tropical beaches across 21 unforgettable days.',
    link: '/tours/three-weeks',
  },
  {
    id: 'ella',
    title: 'Ella Tour',
    badgeTitle: 'Ella Tour',
    hoverTitle: 'Ella Scenic Mountain Tour',
    image: '/tours/ella.png',
    description:
      'Immerse in breathtaking mountain scenery, hike Little Adams Peak, admire the Nine Arches Bridge, and explore lush tea estates.',
    link: '/tours/ella',
  },
]

export default function Tours() {
  return (
    <section id="tours" className="w-full py-16 md:py-24 bg-[#faf9f5] text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal direction="down" duration={0.8}>
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b0c26] tracking-tight mb-6">
              Our Tour Packages
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal px-4">
              Whether you&apos;re a solo traveler seeking adventure, a couple on a romantic getaway, or a family looking for a fun-filled vacation, Tours Sri Lanka is dedicated to crafting custom itineraries that suit your unique style and interests. Our packages are thoughtfully designed to ensure you experience the best of Sri Lanka while catering to your specific travel needs. From exciting adventures to relaxing escapes, we have something for everyone.
            </p>
          </div>
        </ScrollReveal>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tourPackages.map((pkg, index) => (
            <ScrollReveal
              key={pkg.id}
              direction="up"
              delay={(index % 3) * 0.15}
              duration={0.6}
            >
              <div className="flex flex-col items-center group">
                {/* Image & Hover Card Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-100 transition-all duration-300 group-hover:shadow-2xl">
                  {/* Background Image */}
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Default State Badge (Overlaid at bottom of image) */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] text-center transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                    <div className="bg-[#0b0c26] text-white font-bold text-base md:text-lg py-2.5 px-4 rounded-xl shadow-lg border border-white/10">
                      {pkg.badgeTitle}
                    </div>
                  </div>

                  {/* Hover / Active Dark Card Overlay (Exact match to Image 2) */}
                  <div className="absolute inset-0 bg-[#0b0c26] p-6 text-white flex flex-col justify-between items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl z-10 border border-white/10">
                    <h3 className="text-xl font-bold text-white pt-2">
                      {pkg.hoverTitle}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-xs">
                      {pkg.description}
                    </p>
                    <Link
                      href={pkg.link}
                      className="w-full bg-[#ffcc00] hover:bg-[#e6b800] text-slate-950 font-bold py-2.5 px-6 rounded-full shadow-md transition-colors text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Default Below Card Button (Visible when not hovering) */}
                <div className="mt-4 transition-opacity duration-300 group-hover:opacity-0">
                  <Link
                    href={pkg.link}
                    className="inline-block bg-[#f0f4f8] hover:bg-slate-200 text-[#f59e0b] font-semibold text-sm py-2 px-8 rounded-full shadow-sm transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}


