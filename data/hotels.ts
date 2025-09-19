import { FrontendHotel } from "@/types";

const sampleHotels: FrontendHotel[] = [
  {
    id: 1,
    name: "Grand Hotel İstanbul",
    city: "istanbul", // ✅ Tutarlı lowercase
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
    city: "ankara", // ✅ Tutarlı lowercase
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
    city: "izmir", // ✅ Tutarlı lowercase
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
    city: "antalya", // ✅ Tutarlı lowercase
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
    city: "bodrum", // ✅ Tutarlı lowercase
    price: 5000,
    rating: 4,
    image: "🏨",
    description: "Marina manzaralı butik otel",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    maxGuests: 2,
    amenities: ["Deniz Manzarası", "Havuz", "Restoran", "Bar", "Ücretsiz WiFi"], // ✅ "Ücretsik" → "Ücretsiz" düzeltildi
    availableRooms: 6,
    availableDates: [
      { startDate: "2025-10-20", endDate: "2025-10-31" },
      { startDate: "2025-11-20", endDate: "2025-11-30" }
    ]
  },
  {
    id: 6,
    name: "Budget Hotel İstanbul",
    city: "istanbul", // ✅ Tutarlı lowercase
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
    name: "Luxury Grand Hotel İstanbul", // ✅ "Budget Grand Hotel" → "Luxury Grand Hotel" (mantıklı isim)
    city: "istanbul", // ✅ Tutarlı lowercase
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
    city: "fethiye", // ✅ "Fethiye" → "fethiye" (tutarlı lowercase)
    price: 4000,
    rating: 4,
    image: "🏨",
    description: "Marina manzaralı butik otel",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    maxGuests: 4,
    amenities: ["Deniz Manzarası", "Havuz", "Restoran", "Ücretsiz WiFi"], // ✅ "Ücretsik" → "Ücretsiz" düzeltildi
    availableRooms: 6,
    availableDates: [
      { startDate: "2025-10-20", endDate: "2025-10-31" },
      { startDate: "2025-11-20", endDate: "2025-12-30" }
    ]
  },
  {
    id: 9,
    name: "Fethiye Beach Resort", // ✅ "Fethiye Hotel" → "Fethiye Beach Resort" (benzersiz isim)
    city: "fethiye", // ✅ "Fethiye" → "fethiye" (tutarlı lowercase)
    price: 5500, // ✅ 5000 → 5500 (diğerlerinden farklı fiyat)
    rating: 5,
    image: "🏨",
    description: "Plaj kenarında lüks resort", // ✅ Farklılaştırılmış açıklama
    checkInTime: "14:00",
    checkOutTime: "12:00",
    maxGuests: 6, // ✅ 4 → 6 (farklılaştırma)
    amenities: ["Plaj Erişimi", "Havuz", "Spa", "Restoran", "Ücretsiz WiFi", "Tenis Kortu"], // ✅ Farklı amenities
    availableRooms: 8, // ✅ 6 → 8 (farklılaştırma)
    availableDates: [
      { startDate: "2025-09-20", endDate: "2025-10-31" }, // ✅ Farklı tarih aralığı
      { startDate: "2025-11-01", endDate: "2025-12-30" }
    ]
  }
];

export default sampleHotels;