import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(peliculas: any): any {

    let url = "http://image.tmdb.org/t/p/w500";
    if (peliculas) {
      return url + peliculas;
    }else{
      return 'assets/img/no-image.png';
    }

  


  }

}
