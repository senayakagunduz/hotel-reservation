'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import sampleHotels from '@/data/hotels'
import { FilterState } from '@/types'

interface HotelListProps {
  filters: FilterState
}

const HotelList = ({ filters }: HotelListProps) => {
  const [filteredHotels, setFilteredHotels] = useState(sampleHotels);
  useEffect(() => {
    let result = [...sampleHotels];

    if (filters.city) {
      result = result.filter((hotel) =>
        hotel.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }
    if (filters.rating) {
      result = result.filter((hotel) => hotel.rating >= Number(filters.rating))
    }
    // Fiyat aralığına göre filtreleme
    if (filters.minPrice) {
      result = result.filter(hotel =>
        hotel.price >= Number(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      result = result.filter(hotel =>
        hotel.price <= Number(filters.maxPrice)
      );
    }
    if (filters.guests) {
      result = result.filter(hotel => hotel.maxGuests >= Number(filters.guests))
    }
  
    if (filters.checkIn && filters.checkOut) {
      result = result.filter(hotel => {
        const checkIn = new Date(filters.checkIn);
        const checkOut = new Date(filters.checkOut);

        //otelin tüm müsaitlik durumunu kontrol et
        return hotel.availableDates.some(dateRange => {
          const avalibaleStart = new Date(dateRange.startDate);
          const avalibaleEnd = new Date(dateRange.endDate);
          return checkIn >= avalibaleStart && checkOut <= avalibaleEnd;
        })

      })
    }
    setFilteredHotels(result);
  }, [filters])
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Oteller ({filteredHotels.length} sonuç)
        </h2>

        {/* Aktif filtreler */}
        <div className="flex gap-2 flex-wrap">
          {filters.city && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {filters.city}
            </span>
          )}

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-4xl mb-4 text-center">{hotel.image}</div>
              <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
              <p className="text-gray-600 mb-3">{hotel.description}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <span className="text-2xl font-bold text-blue-600">
                  {hotel.price} TL
                </span>
                
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Rezervasyon Yap
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredHotels.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Arama kriterlerinize uygun otel bulunamadı.
          </p>
        </div>
      )}
    </div>
  )
}

export default HotelList
