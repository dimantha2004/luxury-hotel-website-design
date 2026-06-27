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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <main className="w-full">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Contact Us
        </h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Get in touch with us. We&apos;re here to help make your stay unforgettable.
        </p>
      </div>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-foreground/70">
                    Thilina home stay<br />
                    21 post denike rikillagskda
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-foreground/70">+94783113499</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-foreground/70">rthilina021@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Hours</h3>
                  <p className="text-foreground/70">Mon - Sun: 24/7</p>
                  <p className="text-foreground/70">Concierge Available</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-card p-8 rounded shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-accent/20 text-accent-foreground rounded">
                  <p className="font-semibold">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
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
                    <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:opacity-90 transition-opacity mt-4"
                >
                  Send Message
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
