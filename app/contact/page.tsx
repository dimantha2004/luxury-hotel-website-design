'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            message: '',
          })
        }, 3000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="w-full min-h-screen bg-[#faf9f5] flex flex-col font-sans">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0b0c26] text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          Contact Us
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Get in touch with us for room reservations, customized tour packages, or any inquiries. We&apos;re here to make your Sri Lankan journey memorable!
        </p>
      </div>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-8 bg-white p-8 rounded-2xl shadow-md border border-slate-200/80">
              <div className="flex gap-4">
                <MapPin className="text-[#ffcc00] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#0b0c26]">Address</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Thilina home stay<br />
                    21 post denike rikillagskda
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#ffcc00] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#0b0c26]">Phone</h3>
                  <p className="text-slate-600 text-sm font-semibold">+94783113499</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#ffcc00] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#0b0c26]">Email</h3>
                  <p className="text-slate-600 text-sm font-semibold">rthilina021@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#ffcc00] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#0b0c26]">Hours</h3>
                  <p className="text-slate-600 text-sm">Mon - Sun: 24/7 Service</p>
                  <p className="text-slate-500 text-xs mt-0.5">Concierge & Driver Available</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-slate-200/80">
              <h2 className="text-3xl font-extrabold mb-6 text-[#0b0c26]" style={{ fontFamily: 'var(--font-heading)' }}>
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl">
                  <p className="font-semibold text-sm">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl">
                  <p className="font-semibold text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-4">
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
                    <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Email Address</label>
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
                    <label className="block text-sm font-bold mb-2 text-[#0b0c26]">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffcc00] bg-slate-50 text-slate-800"
                      placeholder="How can we help you with your stay or tour?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#ffcc00] hover:bg-[#e6b800] text-slate-950 py-3.5 rounded-xl font-extrabold shadow-md transition-all mt-4 disabled:opacity-50 text-base"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
