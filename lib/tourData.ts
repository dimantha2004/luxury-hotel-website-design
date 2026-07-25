export interface TourDetail {
  slug: string
  title: string
  subtitle: string
  image: string
  description: string
  features: string[]
}

export const tourDetailsMap: Record<string, TourDetail> = {
  'kandy': {
    slug: 'kandy',
    title: 'Kandy City Tour',
    subtitle: 'Explore the Cultural Heart of Sri Lanka',
    image: '/tours/kandy.png',
    description:
      "At Tours Sri Lanka, we offer carefully crafted Kandy City Tours that let you experience the rich cultural heritage and lush landscapes of Sri Lanka's last royal capital. From visiting the sacred Temple of the Tooth Relic and strolling around scenic Kandy Lake to discovering Peradeniya Botanical Gardens and watching Kandyan cultural dance performances, our itinerary ensures an enriching experience. Guided by our knowledgeable team with comfortable transport and flexible scheduling, book your Kandy City Tour with us today to discover the heart of Sri Lanka!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
  'pickup-drop': {
    slug: 'pickup-drop',
    title: 'Airport Pickup & Drop',
    subtitle: 'Seamless & Reliable Travel Across Sri Lanka',
    image: '/tours/pickup.png',
    description:
      "At Tours Sri Lanka, we offer dependable Airport Pickup & Drop services designed to provide smooth, stress-free transfers from Bandaranaike International Airport (CMB) to any destination across the island. Whether you are arriving for a luxury holiday, business trip, or family vacation, our professional chauffeurs meet you on arrival with comfortable air-conditioned vehicles. Enjoy punctual, 24/7 service tailored to your flight schedule. Book your hassle-free airport transfer today!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
  'colombo': {
    slug: 'colombo',
    title: 'Colombo City Tour',
    subtitle: "Explore Sri Lanka's Vibrant Coastal Capital",
    image: '/tours/colombo.png',
    description:
      "At Tours Sri Lanka, we offer engaging Colombo City Tours that showcase the dynamic blend of colonial history, vibrant street markets, and sleek modern architecture in Sri Lanka's largest city. Explore historic landmarks such as Independence Square, Gangaramaya Temple, Pettah Floating Market, and Galle Face Green promenade. With expert local guides, comfortable transport, and tailored stops, discover the captivating soul of Colombo in just one memorable day!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
  'nuwara-eliya': {
    slug: 'nuwara-eliya',
    title: 'Nuwara Eliya Tour',
    subtitle: 'Explore Little England in the Highlands',
    image: '/tours/nuwara-eliya.png',
    description:
      "At Tours Sri Lanka, our Nuwara Eliya Tours take you on a scenic journey into Sri Lanka's central highlands, renowned for cool mountain breezes, misty pine forests, cascading waterfalls, and manicured tea gardens. Tour historic tea factories, walk around serene Gregory Lake, and admire colonial-era architecture. Guided by our expert team with flexible itineraries, book your Nuwara Eliya experience with us today and savor the highland beauty!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
  'down-south': {
    slug: 'down-south',
    title: 'Down South Tour',
    subtitle: 'Explore Coastal Paradise & Heritage',
    image: '/tours/down-south.png',
    description:
      "At Tours Sri Lanka, our Down South Tours take you along the golden palm-fringed beaches and historic coastal towns of southern Sri Lanka. Experience the UNESCO-listed Galle Dutch Fort, witness iconic stilt fishermen, relax on pristine beaches in Bentota and Mirissa, and enjoy sea turtle conservation tours. With comfortable air-conditioned transport and expert local insights, book your tropical Down South getaway today!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
  'one-day': {
    slug: 'one-day',
    title: 'One Day Tour',
    subtitle: 'Explore Sri Lanka in a Day',
    image: '/tours/one-day.png',
    description:
      "At Tours Sri Lanka, we offer carefully crafted One Day Tours that let you experience the beauty and diversity of Sri Lanka, even with limited time. Whether you're looking to explore cultural landmarks, scenic landscapes, or vibrant city life, our one-day tour packages are designed to make the most of your day. From visiting the ancient temples of Kandy to taking a wildlife safari in Yala National Park or enjoying a leisurely day in Colombo, we have options to suit every traveler's interests. Each tour is guided by our experienced and knowledgeable team, ensuring you have a memorable and informative experience. With comfortable transportation, flexible itineraries, and attention to detail, Tours Sri Lanka makes it easy for you to enjoy the best of Sri Lanka in just one day. Book your One Day Tour with us today and discover the wonders of this beautiful island!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
  'two-day': {
    slug: 'two-day',
    title: 'Two Day Tour',
    subtitle: 'Experience Sri Lanka in Two Days',
    image: '/tours/two-day.png',
    description:
      "At Tours Sri Lanka, our Two Day Tours offer the ideal overnight escape to explore deeper into Sri Lanka's rich heritage, wildlife, and mountain landscapes. Travel aboard the iconic blue train through Ella's Nine Arches Bridge, climb Sigiriya Rock fortress, or spot wild leopards in Yala National Park. Enjoy comfortable handpicked stays, private air-conditioned travel, and expert local guidance for an unforgettable two-day adventure!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
  'three-weeks': {
    slug: 'three-weeks',
    title: 'Three Weeks Tour',
    subtitle: 'Ultimate Island Expedition Across Sri Lanka',
    image: '/tours/three-weeks.png',
    description:
      "At Tours Sri Lanka, our grand Three Weeks Tour is the ultimate 21-day round-island journey covering every iconic landmark Sri Lanka has to offer. From ancient royal capitals and sacred UNESCO temples to misty highlands, wildlife national parks, and tropical southern beaches, experience complete immersion. Enjoy fully customized itineraries, luxury transport, dedicated private tour guides, and 24/7 support throughout your entire stay!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
  'ella': {
    slug: 'ella',
    title: 'Ella Tour',
    subtitle: 'Explore Misty Mountains & Iconic Bridges',
    image: '/tours/ella.png',
    description:
      "At Tours Sri Lanka, our Ella Tour invites you to experience one of Sri Lanka's most picturesque mountain destinations. Famous for the architectural marvel of the Nine Arches Bridge, panoramic hikes up Little Adam's Peak and Ella Rock, cascading Ravana Waterfalls, and lush tea estates, Ella offers breathtaking mountain scenery and relaxing vibes. Guided by our expert team with private luxury transport, book your unforgettable Ella getaway with us today!",
    features: ['Customized Tours', 'Local Expertise', '24/7 Support'],
  },
}
