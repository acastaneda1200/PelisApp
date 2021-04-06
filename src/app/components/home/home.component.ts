import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../service/peliculas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculasTrending: any[] = [];
  loading: boolean;
  error: boolean;
  errorMensaje: string;

  constructor(private peliculas: PeliculasService) {

    this.peliculas.getPopulares().subscribe((data: any) => {
      this.loading = true;
      this.error = false;
      this.peliculasTrending = data;
      this.loading = false;
      console.log(data);
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      this.errorMensaje = errorServicio['error']['error']['message']
      console.log(this.errorMensaje);
    }
    );

  }

  ngOnInit(): void {
  }



}
