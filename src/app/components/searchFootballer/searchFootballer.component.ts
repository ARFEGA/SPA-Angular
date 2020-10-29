import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballersService, iFootballer } from '../../services/footballers.service';


@Component({
  selector: 'app-searchFootballer',
  templateUrl: './searchFootballer.component.html'
 
})
export class SearchFootballerComponent implements OnInit {
  footballers:iFootballer[]=[];
  emptyArray:boolean=true;
  constructor(
    private _footballersService:FootballersService, 
    private _activatedRoute:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
      this._activatedRoute.params.subscribe( params =>{
        this.footballers=this._footballersService.searchFootballers(params['name']);
        this.emptyArray=this.footballers.length?false:true;
        //console.log(this.footballers);
     })
  }
   showFootballer(id:number){
      this._router.navigate(['/footballer',id]);
  }

}
