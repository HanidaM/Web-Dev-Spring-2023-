import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  bookTour(tour: any, userProfile: any) {
    const bookingData = {
      tourId: tour.id,
      userId: userProfile.id,
      tourName: tour.name,
      tourPrice: tour.price
    };
    return this.http.post('http://localhost:8000/profile/', bookingData);
  }
}
