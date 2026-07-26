import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0b0c26] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Thilina <span className="text-[#ffcc00]">travels & stay</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Experience timeless luxury, authentic hill-country hospitality, and customized tour packages across Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#ffcc00]">Quick Links</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/rooms" className="hover:text-[#ffcc00] transition-colors">Rooms & Stay</Link></li>
              <li><Link href="/#tours" className="hover:text-[#ffcc00] transition-colors">Tour Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-[#ffcc00] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#ffcc00] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Featured Experiences */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#ffcc00]">Popular Packages</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/tours/mandaram-nuwara" className="hover:text-[#ffcc00] transition-colors">Mandaram Nuwara Tour</Link></li>
              <li><Link href="/tours/kandy" className="hover:text-[#ffcc00] transition-colors">Kandy City Tour</Link></li>
              <li><Link href="/tours/ella" className="hover:text-[#ffcc00] transition-colors">Ella Scenic Mountain Tour</Link></li>
              <li><Link href="/tours/down-south" className="hover:text-[#ffcc00] transition-colors">Down South Coastal Tour</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#ffcc00]">Contact Info</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-[#ffcc00] shrink-0" />
                <span>Thilina home stay<br />21 post denike rikillagskda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#ffcc00] shrink-0" />
                <span>+94783113499</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#ffcc00] shrink-0" />
                <span>rthilina021@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-slate-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Thilina travels & stay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
