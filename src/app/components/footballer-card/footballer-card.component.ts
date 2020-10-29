import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footballer-card',
  templateUrl: './footballer-card.component.html',
  styleUrls: ['./footballer-card.component.css']
})
export class FootballerCardComponent implements OnInit {
  @Input() footballer:any={};
  @Input() index:number;

  @Output() footballerSelected:EventEmitter<number>;

  constructor(private router:Router) { 
    this.footballerSelected= new EventEmitter();
  }

  ngOnInit(): void {
  }

  //Forma de ejecutar un metodo del padre. Se redireccionará desde el padre
  showFootballer(){
    this.footballerSelected.emit(this.footballer.id);
  }
  //Misma acción que el método anterior, pero se redirecciona desde el hijo
  /* showFootballer(id:number){
    this.router.navigate(['/footballer',id])
  } */
}
