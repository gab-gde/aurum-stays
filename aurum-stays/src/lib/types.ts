export type PropertyWithReviews = {
  id: string; title: string; slug: string; description: string;
  type: string; price: number; location: string; country: string;
  bedrooms: number; bathrooms: number; maxGuests: number; area: number;
  images: string[]; amenities: string[]; latitude: number | null;
  longitude: number | null; featured: boolean; rating: number;
  reviews?: ReviewWithUser[];
};

export type ReviewWithUser = {
  id: string; rating: number; comment: string; createdAt: string;
  user: { name: string; avatar: string | null };
};

export type BookingWithProperty = {
  id: string; checkIn: string; checkOut: string; guests: number;
  totalPrice: number; status: string; createdAt: string;
  property: { title: string; slug: string; images: string[]; location: string };
};

export type FilterParams = {
  search?: string; type?: string; sort?: string;
  minPrice?: number; maxPrice?: number; page?: number;
};
