import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from "./app.routes";
//Services
//import { FootballersService } from './/services/footballers.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FootballersComponent } from './components/footballers/footballers.component';
import { FootballerComponent } from './components/footballer/footballer.component';
import { SearchFootballerComponent } from './components/searchFootballer/searchFootballer.component';
import { FootballerCardComponent } from './components/footballer-card/footballer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FootballersComponent,
    FootballerComponent,
    SearchFootballerComponent,
    FootballerCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
