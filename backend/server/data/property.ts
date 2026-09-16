export interface Property {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  host: {
    name: string;
    joinedDate: string;
    avatar: string;
    isSuperhost: boolean;
  };
  images: string[];
  description: string;
  amenities: string[];
  price: number;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

export const propertyData: Property = {
  id: '1',
  title: 'Stunning Beachfront Villa with Infinity Pool',
  location: 'Malibu, California',
  rating: 4.95,
  reviewCount: 127,
  host: {
    name: 'Sarah Johnson',
    joinedDate: 'June 2018',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    isSuperhost: true,
  },
  images: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
  ],
  description: `Escape to paradise in this breathtaking beachfront villa perched on the cliffs of Malibu.

This architectural masterpiece features floor-to-ceiling windows that frame spectacular Pacific Ocean views from every room. Wake up to the sound of waves and enjoy your morning coffee on the expansive terrace overlooking the infinity pool that seems to merge with the sea.

The open-concept living space is designed for both relaxation and entertainment, with a gourmet kitchen, spacious dining area, and luxurious furnishings throughout. The master suite offers a private balcony and spa-like bathroom with a soaking tub positioned to capture the sunset views.

Direct beach access allows you to enjoy morning walks on pristine sand, while the private hot tub on the deck is perfect for stargazing at night. This is truly a once-in-a-lifetime coastal retreat.`,
  amenities: [
    'Ocean view',
    'Beach access',
    'Pool',
    'Hot tub',
    'Wifi',
    'Kitchen',
    'Free parking',
    'Air conditioning',
    'Heating',
    'Washer',
    'Dryer',
    'TV',
    'Dedicated workspace',
    'Outdoor dining area',
    'BBQ grill',
    'Fire pit',
    'Gym',
    'Beach chairs',
    'Surfboards',
    'Kayaks',
  ],
  price: 850,
  guests: 8,
  bedrooms: 4,
  beds: 5,
  baths: 3.5,
};
