import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/service/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  peliculas: any[] = [];
  loading: boolean;
  constructor(private Servicepeliculas: PeliculasService) { 
    


  }

  buscarPeliculas(texto: string){
    this.loading = true;
    if (texto.length == 0){
      this.loading = false;
      this.peliculas = [];
      return ;
     }
    this.Servicepeliculas.buscarPeliculas(texto).subscribe((data:any) =>{
       
      
      this.peliculas = data;
      this.loading = false;
    })
  }

  ngOnInit(): void {
  }

}
