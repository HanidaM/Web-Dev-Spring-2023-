import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  bookings: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/profile/').subscribe(
      (data: any) => {
        this.userProfile = data;
        this.http.get(`http://localhost:8000/profile/?userId=${this.userProfile.id}`).subscribe(
          (data: any) => {
            this.bookings = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
