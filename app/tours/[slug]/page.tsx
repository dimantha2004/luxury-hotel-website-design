import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { tourDetailsMap } from '@/lib/tourData'

export async function generateStaticParams() {
  return Object.keys(tourDetailsMap).map((slug) => ({ slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params
  const tour = tourDetailsMap[slug]

  if (!tour) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navigation />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Large Vertical Image */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="scale" duration={0.8}>
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Sub-header with Yellow Accent Bar */}
              <ScrollReveal direction="left" delay={0.1} duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#0a0c27] uppercase tracking-widest text-sm font-extrabold">
                    TOURS SRI LANKA
                  </span>
                  <span className="w-12 h-[3px] bg-[#ffcc00] rounded-full inline-block"></span>
                </div>
              </ScrollReveal>

              {/* Main Heading */}
              <ScrollReveal direction="up" delay={0.2} duration={0.6}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0c27] tracking-tight leading-tight mb-6">
                  {tour.title} – {tour.subtitle}
                </h1>
              </ScrollReveal>

              {/* Description Paragraph */}
              <ScrollReveal direction="up" delay={0.3} duration={0.6}>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8 font-normal">
                  {tour.description}
                </p>
              </ScrollReveal>

              {/* Feature Cards Grid (Yellow Icons) */}
              <ScrollReveal direction="up" delay={0.4} duration={0.6}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Personalized Tours Box */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffcc00] text-slate-900 flex items-center justify-center shadow-sm shrink-0">
                      <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <span className="text-lg font-bold text-[#0a0c27]">
                      Personalized Tours
                    </span>
                  </div>

                  {/* Local Expertise Box */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffcc00] text-slate-900 flex items-center justify-center shadow-sm shrink-0">
                      <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <span className="text-lg font-bold text-[#0a0c27]">
                      Local Expertise
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Checklist Items */}
              <ScrollReveal direction="up" delay={0.5} duration={0.6}>
                <div className="space-y-3 mb-10">
                  {tour.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ffcc00] text-slate-900 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-bold text-[#0a0c27]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Book Now Action Button */}
              <ScrollReveal direction="up" delay={0.6} duration={0.6}>
                <div>
                  <Link
                    href={`/booking?type=tour&tour=${tour.slug}`}
                    className="inline-block bg-[#ffcc00] hover:bg-[#e6b800] text-slate-900 font-extrabold py-3.5 px-8 rounded-full shadow-lg transition-all text-base hover:scale-105"
                  >
                    Book Your Tour Now
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

