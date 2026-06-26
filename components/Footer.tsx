import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              La Villa Banya
            </h3>
            <p className="text-primary-foreground/70">
              Experience timeless luxury and exceptional hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#rooms" className="hover:text-primary-foreground transition-colors">Rooms</a></li>
              <li><a href="#dining" className="hover:text-primary-foreground transition-colors">Dining</a></li>
              <li><a href="#gallery" className="hover:text-primary-foreground transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="font-bold text-lg mb-4">Amenities</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Spa & Wellness</li>
              <li>Fine Dining</li>
              <li>Conference Rooms</li>
              <li>Fitness Center</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>123 Coastal Avenue<br/>Paradise Bay, PB 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <span>info@lavillabanya.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} La Villa Banya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
