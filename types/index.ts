export interface FilterState {
  city: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  minPrice: string;
  maxPrice: string;
  rating: string;
}

// Prisma-aligned core domain types
export interface User {
  id: string;                    // MongoDB ObjectId as string
  name: string;
  email: string;                 // Schema'da @unique
  passwordHash?: string | null;
  phone?: string | null;
  role: 'CUSTOMER' | 'ADMIN';   // UserRole enum'a uygun
  createdAt: string;            // ISO string for frontend
  updatedAt: string;            // ISO string for frontend
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  capacity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  price: number;               // Int → number
  rating: number;              // Int → number
  image?: string | null;
  description?: string | null;
  checkInTime: string;
  checkOutTime: string;
  maxGuests: number;           // Int → number
  amenities: string[];
  availableRooms: number;      // Int → number
  createdAt: string;           // DateTime → ISO string
  updatedAt: string;           // DateTime → ISO string
}
export interface HotelAvailability {
  id: string;
  hotelId: string;
  startDate: string;           // DateTime → ISO string
  endDate: string;             // DateTime → ISO string
}
export interface Reservation {
  id: string;
  hotelId: string;
  hotel?: Hotel;               // Relation - opsiyonel populate
  roomId?: string | null;
  room?: Room | null;          // Relation - opsiyonel populate
  userId?: string | null;
  user?: User | null;          // Relation - opsiyonel populate
  checkIn: string;             // DateTime → ISO string
  checkOut: string;            // DateTime → ISO string
  guests: number;              // Int → number
  totalPrice: number;          // Int → number
  status: ReservationStatus;
  createdAt: string;           // DateTime → ISO string
  updatedAt: string;           // DateTime → ISO string
}
export enum ReservationStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED'
}
export type FrontendHotel = Omit<Hotel, 'createdAt' | 'updatedAt' | 'image' | 'description' | 'id'> & {
  id: string | number;         // Esnek: sample data (number) + real data (string)
  image: string;               // Zorunlu: UI her zaman image gösterir
  description: string;         // Zorunlu: UI her zaman description gösterir
  availableDates: {            // Frontend'e özel: HotelAvailability'den dönüştürülür
    startDate: string;
    endDate: string;
  }[];
};
