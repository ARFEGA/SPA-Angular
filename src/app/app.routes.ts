
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FootballersComponent } from './components/footballers/footballers.component';
import { FootballerComponent } from './components/footballer/footballer.component';
import { SearchFootballerComponent } from './components/searchFootballer/searchFootballer.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'footballers', component: FootballersComponent },
    { path: 'searchFootballer/:name',component: SearchFootballerComponent },
    { path: 'footballer/:id',component: FootballerComponent },
    { path: '**', pathMatch:'full',redirectTo: 'home' }
];


export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
