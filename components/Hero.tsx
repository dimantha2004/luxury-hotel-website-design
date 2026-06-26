import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen pt-16">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="La Villa Banya luxury hotel entrance"
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
            La Villa Banya
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-balance">
            Experience Timeless Luxury and Exceptional Hospitality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity">
              Explore Rooms
            </button>
            <button className="bg-white/20 text-white px-8 py-3 rounded font-semibold hover:bg-white/30 transition-colors border border-white/40">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
