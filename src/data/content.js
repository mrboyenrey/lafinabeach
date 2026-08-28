// Central content/data for the Lafina Beach Resort website.
// Edit this file to change rooms, amenities, gallery images, and testimonials.

export const site = {
  name: 'Lafina Beach Resort',
  tagline: 'Where the ocean meets serenity',
  phone: '+63 (2) 1234 5678',
  email: 'hello@lafinabeach.com',
  address: 'Lafina Cove, Brgy. San Rafael, Batangas, Philippines',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean Room',
    price: 185,
    size: '38 m²',
    guests: 2,
    bed: 'King Bed',
    description:
      'A serene room with a private balcony overlooking the sea, ideal for couples.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
    tags: ['Sea View', 'Balcony', 'Breakfast'],
  },
  {
    id: 2,
    name: 'Beachfront Suite',
    price: 265,
    size: '55 m²',
    guests: 3,
    bed: 'King + Sofa',
    description:
      'Wake up to waves at your doorstep in this suite with direct beach access.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    tags: ['Beachfront', 'Bathtub', 'Lounge'],
  },
  {
    id: 3,
    name: 'Garden Villa',
    price: 220,
    size: '70 m²',
    guests: 4,
    bed: '2 Queen Beds',
    description:
      'Surrounded by tropical gardens, this villa offers privacy and lush views.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    tags: ['Garden View', 'Veranda', 'Kitchenette'],
  },
  {
    id: 4,
    name: 'Family Suite',
    price: 310,
    size: '82 m²',
    guests: 5,
    bed: 'King + Bunk',
    description:
      'Spacious two-bedroom suite designed for family adventures by the shore.',
    image:
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=80',
    tags: ['2 Bedrooms', 'Kid-friendly', 'Living Room'],
  },
  {
    id: 5,
    name: 'Honeymoon Villa',
    price: 420,
    size: '90 m²',
    guests: 2,
    bed: 'King Bed',
    description:
      'A romantic private villa with an infinity plunge pool and sunset deck.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    tags: ['Private Pool', 'Sunset Deck', 'Butler'],
  },
  {
    id: 6,
    name: 'Penthouse Suite',
    price: 550,
    size: '120 m²',
    guests: 6,
    bed: '3 King Beds',
    description:
      'The crown of the resort — panoramic ocean views and a rooftop lounge.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
    tags: ['Rooftop', 'Panoramic View', 'Jacuzzi'],
  },
];

export const amenities = [
  {
    title: 'Infinity Pool',
    description: 'An ocean-edge pool with swim-up bar and sunset loungers.',
    icon: 'pool',
  },
  {
    title: 'Beachfront Access',
    description: 'Private white-sand cove reserved exclusively for guests.',
    icon: 'beach',
  },
  {
    title: 'Ocean Spa',
    description: 'Signature massages and wellness rituals by the shore.',
    icon: 'spa',
  },
  {
    title: 'Fine Dining',
    description: 'Farm-to-table seafood and island-inspired cuisine.',
    icon: 'dining',
  },
  {
    title: 'Free Wi-Fi',
    description: 'High-speed fiber internet across the entire property.',
    icon: 'wifi',
  },
  {
    title: 'Fitness Center',
    description: 'A modern gym with a view of the waves.',
    icon: 'gym',
  },
];

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
    alt: 'White sand beach and clear water',
  },
  {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80',
    alt: 'Resort infinity pool at dusk',
  },
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    alt: 'Hotel pool with palm trees',
  },
  {
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80',
    alt: 'Sunset over the ocean',
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80',
    alt: 'Luxury resort pool and cabanas',
  },
  {
    src: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=900&q=80',
    alt: 'Tropical beach resort',
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
    alt: 'Cozy resort interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=900&q=80',
    alt: 'Crystal clear resort pool',
  },
];

export const testimonials = [
  {
    name: 'Sofia Martinez',
    location: 'Manila, PH',
    rating: 5,
    text: 'The most peaceful escape we have ever had. Waking up to the sound of waves at the Beachfront Suite was pure magic.',
  },
  {
    name: 'Daniel Lee',
    location: 'Singapore',
    rating: 5,
    text: 'Impeccable service, stunning infinity pool, and food that exceeded every expectation. We already booked our next stay.',
  },
  {
    name: 'Aisha Rahman',
    location: 'Dubai, UAE',
    rating: 4,
    text: 'Perfect for our family. The Family Suite was spacious and the kids loved the private beach. Highly recommended!',
  },
  {
    name: 'Mark & Jane',
    location: 'Sydney, AU',
    rating: 5,
    text: 'We celebrated our honeymoon at the Honeymoon Villa and it was unforgettable. The sunset deck is a dream.',
  },
];
