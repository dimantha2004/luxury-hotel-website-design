export interface Room {
  id: string
  name: string
  category: 'suite' | 'deluxe' | 'standard'
  price: number
  image: string
  description: string
  amenities: string[]
  capacity: number
  sqft: number
}

export interface MenuItem {
  id: string
  name: string
  category: 'appetizers' | 'mains' | 'desserts' | 'beverages'
  price: number
  description: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export interface GalleryImage {
  id: string
  title: string
  image: string
  category: 'rooms' | 'restaurant' | 'amenities' | 'views'
}
