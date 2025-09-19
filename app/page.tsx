"use client"
import HotelList from "@/components/HotelList";
import SearchForm from "@/components/SearchForm";
import { FilterState } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";

function SearchParamsWrapper()  {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    city: searchParams.get("city") || "",
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
    guests: searchParams.get("guests") || "",
    rating: searchParams.get("rating") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  })

  const updateFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value as string);
      }
    })
    const newUrl = params.toString() ? `/?${params.toString()}` : '/';
    router.push(newUrl, { scroll: false })
  }

  // URL'yi güncelle (sayfa yenilenmeden)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Otel Rezervasyon Sistemi
        </h1>

        <SearchForm
          filters={filters}
          onFiltersChange={updateFilters}
        />

        <HotelList filters={filters} />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <SearchParamsWrapper />
    </Suspense>
  )
}