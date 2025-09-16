import React, { useState } from 'react'

interface FilterState {
  city: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  minPrice: string;
  maxPrice: string;
  rating: string;
  availableDates: {
    startDate: string;
    endDate: string;
  };
}
interface SearchFormProps {
  filters: any,
  onFiltersChange: (filters: any) => void
}
const SearchForm = ({ filters, onFiltersChange }: SearchFormProps) => {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters as FilterState);
  const [priceRange, setPriceRange] = useState<FilterState>(filters as FilterState)

  const cities = [
    { value: '', label: 'Sehir Seçiniz' },
    { value: 'istanbul', label: 'Istanbul' },
    { value: 'ankara', label: 'Ankara' },
    { value: 'izmir', label: 'Izmir' },
    { value: 'antalya', label: 'Antalya' },
    { value: 'bodrum', label: 'Bodrum' },
    { value: 'fethiye', label: 'Fethiye' },
  ]
 
  const ratings = [
    { value: '', label: 'Puan Seçiniz' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ]
  const handleInputChange = (field: string, value: string) => {
    setLocalFilters(prev => ({ ...prev, [field]: value }))
  }
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFiltersChange(localFilters)
  }
  const handleReset = () => {
    const emptyFilters = {
      city: '',
      checkIn: '',
      checkOut: '',
      guests: '',
      minPrice: '',
      maxPrice: '',
      rating: '',
      availableDates: { startDate: '', endDate: '' }
    };
    onFiltersChange(emptyFilters)
    setLocalFilters(emptyFilters)
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Şehir Seçimi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Şehir
          </label>
          <select
            value={localFilters.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            {cities.map(city => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        {/* Giriş Tarihi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Giriş Tarihi
          </label>
          <input
            type="date"
            value={localFilters.checkIn}
            onChange={(e) => handleInputChange('checkIn', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Çıkış Tarihi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Çıkış Tarihi
          </label>
          <input
            type="date"
            value={localFilters.checkOut}
            onChange={(e) => handleInputChange('checkOut', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Misafir Sayısı */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Misafir Sayısı
          </label>
          <select
            value={localFilters.guests}
            onChange={(e) => handleInputChange('guests', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num.toString()}>
                {num} Kişi
              </option>
            ))}
          </select>
        </div>

        {/* Fiyat Aralığı */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fiyat Aralığı
          </label>
          <input
            type="number"
            value={localFilters.minPrice || ''}
            onChange={(e) => handleInputChange('minPrice', e.target.value)}
            min="0"
            placeholder="Min"
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={localFilters.maxPrice || ''}
            onChange={(e) => handleInputChange('maxPrice', e.target.value)}
            min="0"
            placeholder="Max"
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          
        </div>

        {/* Yıldız Sayısı */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Yıldız Sayısı
          </label>
          <select
            value={localFilters.rating}
            onChange={(e) => handleInputChange('rating', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            {ratings.map(rating => (
              <option key={rating.value} value={rating.value}>
                {rating.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Butonlar */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Ara
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400 transition-colors"
        >
          Temizle
        </button>
      </div>
    </div>
  )
}

export default SearchForm
