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
    <div className="min-h-screen bg-[#faf9f5] flex flex-col font-sans">
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c26] text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          {isRoom ? 'Book Your Stay' : 'Book a Tour'}
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          {isRoom 
            ? 'Fill in the form below and we\'ll get back to you to confirm your reservation.'
            : 'Fill in the form below and we\'ll get back to you to confirm your tour booking.'
          }
        </p>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] flex-1">
        <div className={isRoom ? "max-w-4xl mx-auto" : "max-w-2xl mx-auto"}>
          {submitted && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl">
              <p className="font-semibold text-sm">
                {isRoom 
                  ? 'Thank you! We\'ll contact you soon to confirm your reservation.'
                  : 'Thank you! We\'ll contact you soon to confirm your tour booking.'
                }
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl">
              <p className="font-semibold text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-md border border-slate-200/80">
            {isRoom ? (
              // Book Your Stay Form fields
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Check-in Date</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                  >
                    <option value="standard">Double Room with Mountain View (US$22/night)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Special Requests</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                    placeholder="Any special requests or preferences..."
                  />
                </div>
              </div>
            ) : (
              // Original Tour Booking Form fields
              <>
                <div>
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Preferred Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ffcc00] hover:bg-[#e6b800] text-slate-950 py-3.5 rounded-xl font-extrabold shadow-md transition-all disabled:opacity-50 text-base"
            >
              {loading ? 'Sending...' : (isRoom ? 'Request Reservation' : 'Submit Booking')}
            </button>
          </form>
        </div>
      </section>
    </div>
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
