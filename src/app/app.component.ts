import { Component } from '@angular/core';
import {PeliculasService} from "./service/peliculas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public title = "Pelicula";
  constructor(public _ps: PeliculasService){
    //this._ps.getPopulares().subscribe(data=>console.log(data));
    
  }

}
