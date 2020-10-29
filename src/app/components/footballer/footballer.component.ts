import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballersService,iFootballer } from './../../services/footballers.service';



@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html'
})
export class FootballerComponent implements OnInit {
  footballer:iFootballer;
  constructor(private _activatedRoute:ActivatedRoute, private footballerService:FootballersService) {
    this._activatedRoute.params.subscribe( params =>{
      this.footballer=footballerService.getFootballer(params['id']);
    })
    console.log(this.footballer)
   }

  ngOnInit(): void {
  }

}
