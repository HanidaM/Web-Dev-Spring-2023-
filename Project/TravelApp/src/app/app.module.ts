import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ServicesComponent } from './services/services.component';
import { GaleryComponent } from './galery/galery.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BookComponent,
    SubscriptionComponent,
    ServicesComponent,
    GaleryComponent,
    AboutComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
