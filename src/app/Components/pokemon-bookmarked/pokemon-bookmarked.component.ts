import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/PokeAPIModels';
import { BookmarkPokemonService } from 'src/app/Services/bookmark-pokemon.service';

@Component({
  selector: 'app-pokemon-bookmarked',
  templateUrl: './pokemon-bookmarked.component.html',
  styleUrls: ['./pokemon-bookmarked.component.css']
})
export class PokemonBookmarkedComponent implements OnInit {

  pokemonList: Array<Pokemon> = [];

  constructor(private bookmarkService: BookmarkPokemonService) { }

  ngOnInit(): void {
    this.pokemonList = this.bookmarkService.getBookmarkedPokemon();
  }
}
