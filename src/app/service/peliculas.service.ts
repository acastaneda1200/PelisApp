import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = "ddd783abdd19599f67d46b41f8e95f46";
  private urlMoviedb: string = "https://api.themoviedb.org/3"; 

  constructor(private jsonp: HttpClientJsonpModule,
              private http: HttpClient) { }

  getPopulares(){
    let url = `${this.urlMoviedb}/trending/all/week?api_key=${this.apiKey}&language=es`;

    return this.http.get( url ).pipe( map(data=> data['results']));

        //   return  this.getPokemonData('pokemon')
    //   .pipe(map(data => data['results']));
  }
  buscarPeliculas(texto: string){
    
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${texto}&page=1&include_adult=false`;

    return this.http.get( url ).pipe( map(data=> data['results']));
  }
}
