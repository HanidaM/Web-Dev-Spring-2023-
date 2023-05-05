import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../_serv/booking.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  tours: any;
  userProfile: any;

  constructor(private http: HttpClient, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/tours/').subscribe(
      (data: any) => {
        this.tours = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  bookTour(tour: any) {
    this.bookingService.bookTour(tour, this.userProfile).subscribe(
      (data: any) => {
        console.log('Tour booked successfully!');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
