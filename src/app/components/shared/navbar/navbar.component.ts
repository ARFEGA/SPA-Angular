import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
  
})
export class NavbarComponent {
   
  constructor( private _router:Router) { }

 
  searchFootballer(footballer:string){
    this._router.navigate(['/searchFootballer',footballer]);
  }
}
