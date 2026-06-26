import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedRooms from '@/components/FeaturedRooms'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <FeaturedRooms />
      <Testimonials />
      <Footer />
    </main>
  )
}
