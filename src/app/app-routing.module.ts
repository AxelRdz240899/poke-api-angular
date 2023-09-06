import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './Components/pokemon-detail/pokemon-detail.component';
import { PokemonBookmarkedComponent } from './Components/pokemon-bookmarked/pokemon-bookmarked.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: 'detail',
    component: PokemonDetailComponent
  },
  {
    path: 'bookmarked',
    component: PokemonBookmarkedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
