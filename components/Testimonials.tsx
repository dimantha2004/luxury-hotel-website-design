'use client'

import Image from 'next/image'
import { testimonials } from '@/lib/data'
import { Star, Quote } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="down" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#0b0c26]" style={{ fontFamily: 'var(--font-heading)' }}>
              Guest Testimonials
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              Hear from our distinguished guests about their unforgettable stay and tours with Thilina travels & stay.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <ScrollReveal
              key={testimonial.id}
              direction="up"
              delay={idx * 0.15}
              duration={0.6}
            >
              <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 flex flex-col justify-between h-full relative overflow-hidden">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[#ffcc00]/20 pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[#ffcc00] text-[#ffcc00]"
                      />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <p className="text-slate-700 text-base sm:text-lg mb-6 italic leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-[#0b0c26] text-base">{testimonial.name}</p>
                    <p className="text-slate-500 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

