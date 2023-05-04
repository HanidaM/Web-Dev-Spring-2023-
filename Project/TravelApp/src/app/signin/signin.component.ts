import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'


import { AuthService } from 'src/app/_serv/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent{


  @Output() loginSuccess = new EventEmitter<{ isLogged: boolean, username: string, password: string }>();

isLogged: boolean;
username: string;
password: string;

loginForm = new FormGroup({
  login: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required])
})

constructor(private loginService: AuthService, public dialogRef: MatDialogRef<SigninComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  this.isLogged = data.isLogged;
  this.username = data.username;
  this.password = data.password;
}

login(): void {
  this.loginService.login(this.username, this.password).subscribe((data) => {
    localStorage.setItem('token', data.token);
    this.isLogged = true;
    this.loginSuccess.emit({ isLogged: this.isLogged, username: this.username, password: this.password });
  })
}

onSubmit(): void {
  if (this.loginForm.valid) {
    if (this.loginForm.value.login && this.loginForm.value.password) {
      this.username = this.loginForm.value.login;
      this.password = this.loginForm.value.password;
      this.login();
    }
    this.dialogRef.close(this.loginForm.value);
  }    
}

onCancel(): void {
  this.dialogRef.close();
}
}
