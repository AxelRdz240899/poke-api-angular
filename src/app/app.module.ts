import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './Components/pokemon-detail/pokemon-detail.component';
import { PokemonBookmarkedComponent } from './Components/pokemon-bookmarked/pokemon-bookmarked.component';
import { MenuComponent } from './Components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonBookmarkedComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
