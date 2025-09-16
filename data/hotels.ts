interface Hotel {
  id: number;
  name: string;
  city: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  checkInTime: string;
  checkOutTime: string;
  maxGuests: number;
  amenities?: string[];
  availableRooms: number;
  availableDates: {
    startDate: string; // YYYY-MM-DD format
    endDate: string;   // YYYY-MM-DD format
  }[];
}

const sampleHotels: Hotel[] = [
  {
    id: 1,
    name: "Grand Hotel İstanbul",
    city: "istanbul",
    price: 4500,
    rating: 5,
    image: "🏨",
    description: "Şehir merkezinde lüks otel",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    maxGuests: 4,
    amenities: ["Ücretsiz WiFi", "Havuz", "Spa", "Restoran", "Otopark"],
    availableRooms: 12,
    availableDates: [
      { startDate: "2025-10-01", endDate: "2025-10-15" },
      { startDate: "2025-11-01", endDate: "2025-11-30" }
    ]
  },

  {
    id: 2,
    name: "Ankara Palace",
    city: "ankara",
    price: 4000,
    rating: 4,
    image: "🏨",
    description: "Kızılay'da konforlu konaklama",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    maxGuests: 3,
    amenities: ["Ücretsiz WiFi", "Restoran", "Otopark", "24 Saat Resepsiyon"],
    availableRooms: 8,
    availableDates: [
      { startDate: "2025-10-10", endDate: "2025-10-25" },
      { startDate: "2025-11-10", endDate: "2025-12-10" }
    ]
  },
  {
    id: 3,
    name: "İzmir Bay Hotel",
    city: "izmir",
    price: 3200,
    rating: 3,
    image: "🏨",
    description: "Kordon'da deniz manzaralı",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    maxGuests: 2,
    amenities: ["Ücretsiz WiFi", "Deniz Manzarası", "Kahvaltı", "Otopark"],
    availableRooms: 5,
    availableDates: [
      { startDate: "2025-10-05", endDate: "2025-10-20" },
      { startDate: "2025-11-05", endDate: "2025-11-25" }
    ]
  },
  {
    id: 4,
    name: "Antalya Resort",
    city: "antalya",
    price: 2500,
    rating: 5,
    image: "🏨",
    description: "Her şey dahil tatil köyü",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    maxGuests: 4,
    amenities: ["Her Şey Dahil", "Havuz", "Spa", "Çocuk Oyun Alanı", "Açık Büfe"],
    availableRooms: 20,
    availableDates: [
      { startDate: "2025-10-15", endDate: "2025-10-30" },
      { startDate: "2025-11-15", endDate: "2025-12-15" }
    ]
  },
  {
    id: 5,
    name: "Bodrum Marina Hotel",
    city: "bodrum",
    price: 5000,
    rating: 4,
    image: "🏨",
    description: "Marina manzaralı butik otel",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    maxGuests: 2,
    amenities: ["Deniz Manzarası", "Havuz", "Restoran", "Bar", "Ücretsik WiFi"],
    availableRooms: 6,
    availableDates: [
      { startDate: "2025-10-20", endDate: "2025-10-31" },
      { startDate: "2025-11-20", endDate: "2025-11-30" }
    ]
  },
  {
    id: 6,
    name: "Budget Hotel İstanbul",
    city: "istanbul",
    price: 2800,
    rating: 3,
    image: "🏨",
    description: "Ekonomik seçenek",
    checkInTime: "13:00",
    checkOutTime: "11:00",
    maxGuests: 2,
    amenities: ["Ücretsiz WiFi", "24 Saat Resepsiyon", "Ortak Mutfak"],
    availableRooms: 15,
    availableDates: [
      { startDate: "2025-10-25", endDate: "2025-11-05" },
      { startDate: "2025-11-25", endDate: "2025-12-05" }
    ]
  },
  {
    id: 7,
    name: "Budget Grand Hotel İstanbul",
    city: "istanbul",
    price: 5000,
    rating: 5,
    image: "🏨",
    description: "Şehir merkezinde lüks otel",
    checkInTime: "12:00",
    checkOutTime: "11:00",
    maxGuests: 4,
    amenities: ["Ücretsiz WiFi", "Havuz", "Spa", "Restoran", "Otopark"],
    availableRooms: 12,
    availableDates: [
      { startDate: "2025-09-16", endDate: "2025-10-16" },
      { startDate: "2025-10-16", endDate: "2025-12-30" }
    ]
  },
  {
    id: 8,
    name: "Fethiye Marina Hotel",
    city: "Fethiye",
    price: 4000,
    rating: 4,
    image: "🏨",
    description: "Marina manzaralı butik otel",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    maxGuests: 4,
    amenities: ["Deniz Manzarası", "Havuz", "Restoran", "Ücretsik WiFi"],
    availableRooms: 6,
    availableDates: [
      { startDate: "2025-10-20", endDate: "2025-10-31" },
      { startDate: "2025-11-20", endDate: "2025-12-30" }
    ]
  },
  {
    id: 9,
    name: "Fethiye Hotel",
    city: "Fethiye",
    price: 5000,
    rating: 5,
    image: "🏨",
    description: "Marina manzaralı butik otel",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    maxGuests: 4,
    amenities: ["Deniz Manzarası", "Havuz", "Restoran", "Ücretsik WiFi"],
    availableRooms: 6,
    availableDates: [
      { startDate: "2025-10-20", endDate: "2025-10-31" },
      { startDate: "2025-11-20", endDate: "2025-12-30" }
    ]
  },
];

export default sampleHotels;