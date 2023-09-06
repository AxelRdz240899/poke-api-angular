import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/PokeAPIModels';
import { BookmarkPokemonService } from 'src/app/Services/bookmark-pokemon.service';

@Component({
  selector: 'pokemon-grid-card',
  templateUrl: './pokemon-grid-card.component.html',
  styleUrls: ['./pokemon-grid-card.component.css']
})
export class PokemonGridCardComponent {
  @Input() canChangeBookMarkStatus: boolean = false;
  @Input() pokemonInformation: Pokemon = {
    name: "",
    url: "",
    id: "-1",
    isBookmarked: false
  };

  constructor(private bookmarkService: BookmarkPokemonService) { }

  bookmarkPokemon(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.canChangeBookMarkStatus) {
      if (this.pokemonInformation.isBookmarked) {
        this.pokemonInformation.isBookmarked = false;
        this.bookmarkService.unbookmarkPokemon(this.pokemonInformation.id);
      }
      else {
        this.pokemonInformation.isBookmarked = true;
        this.bookmarkService.bookmarkPokemon(this.pokemonInformation);
      }
    }
  }
}
