export interface Host {
  name: string;
  joinedDate: string;
  avatar: string;
  isSuperhost: boolean;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  host: Host;
  images: string[];
  description: string;
  amenities: string[];
  price: number;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}
