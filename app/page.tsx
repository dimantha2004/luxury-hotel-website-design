import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedRooms from '@/components/FeaturedRooms'
import Tours from '@/components/Tours'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Tours />
      <FeaturedRooms />
      <Testimonials />
      <Footer />
    </main>
  )
}
