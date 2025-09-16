export interface FilterState {
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
