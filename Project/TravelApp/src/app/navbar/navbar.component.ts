import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { SigninComponent } from 'src/app/signin/signin.component'; 
import { SignupComponent } from 'src/app/signup/signup.component';
import { UserService } from 'src/app/_serv/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;
  username: string = "";
  password: string = "";
  
  searchQuery: string = "";

  dialogRef!: MatDialogRef<SigninComponent>;
  dialogSignUp!: MatDialogRef<SignupComponent>;

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
  };

  openLoginDialog(): void {
    this.dialogRef = this.dialog.open(SigninComponent, {
      width: '500px',
      data: {
        isLogged: this.isLogged,
        username: this.username,
        password: this.password,
      }
    });

    this.dialogRef.componentInstance.loginSuccess.subscribe(data => {
      this.isLogged = data.isLogged;
      this.username = data.username;
      this.password = data.password;
      this.userService.username = data.username;
    });
  };

  openSignUpDialog(): void {
    this.dialogSignUp = this.dialog.open(SignupComponent, {
      width: '500px',
    });
  }

  handleLogout(): void {
    localStorage.removeItem('token');
    this.isLogged = false;
    this.userService.username = '';
  };
}
