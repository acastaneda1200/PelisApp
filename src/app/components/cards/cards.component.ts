import { Component,Input , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {

  @Input() items:any[] = [];
  public urlImagen = `http://image.tmdb.org/t/p/w500/`;
  public urlImagenPoster = `http://image.tmdb.org/t/p/w500/`;
  
  constructor(private router: Router) { 
  }

  

}
