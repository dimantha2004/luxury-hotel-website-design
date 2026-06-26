'use client'

import { useState, Suspense } from 'react'
import { Calendar } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

function BookingForm() {
  const searchParams = useSearchParams()
  const bookingType = searchParams.get('type') || 'tour'
  const queryRoomType = searchParams.get('roomType') || 'deluxe'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: queryRoomType,
    message: '',
    date: '',
    type: bookingType,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '1',
          roomType: queryRoomType,
          message: '',
          date: '',
          type: bookingType,
        })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Failed to submit. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const isRoom = bookingType === 'room'

  return (
    <>
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {isRoom ? 'Book Your Stay' : 'Book a Tour'}
        </h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          {isRoom 
            ? 'Fill in the form below and we\'ll get back to you to confirm your reservation.'
            : 'Fill in the form below and we\'ll get back to you to confirm your tour booking.'
          }
        </p>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className={isRoom ? "max-w-4xl mx-auto" : "max-w-2xl mx-auto"}>
          {submitted && (
            <div className="mb-6 p-4 bg-accent/20 text-accent-foreground rounded">
              <p className="font-semibold">
                {isRoom 
                  ? 'Thank you! We\'ll contact you soon to confirm your reservation.'
                  : 'Thank you! We\'ll contact you soon to confirm your tour booking.'
                }
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-destructive/20 text-destructive rounded">
              <p className="font-semibold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded shadow-lg">
            {isRoom ? (
              // Book Your Stay Form fields from Contact page
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Check-in Date</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 text-foreground">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  >
                    <option value="suite">Presidential Suite</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="standard">Standard Room</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 text-foreground">Special Requests</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="Any special requests or preferences..."
                  />
                </div>
              </div>
            ) : (
              // Original Tour Booking Form fields
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Preferred Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary text-secondary-foreground py-3 rounded font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Sending...' : (isRoom ? 'Request Reservation' : 'Submit Booking')}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default function BookingPage() {
  return (
    <main className="w-full">
      <Navigation />
      <Suspense fallback={null}>
        <BookingForm />
      </Suspense>
      <Footer />
    </main>
  )
}
