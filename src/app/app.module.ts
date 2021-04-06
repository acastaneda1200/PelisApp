import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PeliculasService } from './service/peliculas.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/search/search.component';

//Routes
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    CardsComponent,
    HomeComponent,
    PeliculaComponent,
    SearchComponent,
    NoimagePipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot( ROUTES, {useHash: true})
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
