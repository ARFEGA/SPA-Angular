import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FootballersService,iFootballer } from './../../services/footballers.service';

@Component({
  selector: 'app-footballers',
  templateUrl: './footballers.component.html',
  styles: [
  ]
})

export class FootballersComponent implements OnInit{
  //iFootballer es una interfaz que nos aporta un tipo de dato
  footballers:iFootballer[];
  constructor(private router:Router,private _footballersService:FootballersService//Instanciamos la clase
    ) {}
  ngOnInit(){
     this.footballers=this._footballersService.getFootballers();
  }
   showFootballer(id:number){
      this.router.navigate(['/footballer',id]);
  }
  
}
