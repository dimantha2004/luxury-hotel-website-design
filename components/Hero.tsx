import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen pt-16">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Thilina travels & stay luxury hotel entrance"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pt-16" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance" style={{ fontFamily: 'var(--font-heading)' }}>
            Thilina travels & stay
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-balance">
            Experience Timeless Luxury and Exceptional Hospitality
          </p>

        </div>
      </div>
    </section>
  )
}
