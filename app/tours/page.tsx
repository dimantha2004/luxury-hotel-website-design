import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Tours from '@/components/Tours'

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navigation />
      <main className="flex-1 py-8">
        <Tours />
      </main>
      <Footer />
    </div>
  )
}
