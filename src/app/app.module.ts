import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './Components/pokemon-detail/pokemon-detail.component';
import { PokemonBookmarkedComponent } from './Components/pokemon-bookmarked/pokemon-bookmarked.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PokemonGridComponent } from './Components/pokemon-grid/pokemon-grid.component';
import { PokemonGridCardComponent } from './Components/pokemon-grid-card/pokemon-grid-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonBookmarkedComponent,
    MenuComponent,
    PokemonGridComponent,
    PokemonGridCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
