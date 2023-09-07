import { Component, OnInit } from '@angular/core';
import { MainListResponse } from 'src/app/Interfaces/PokeAPIModels';
import { BookmarkPokemonService } from 'src/app/Services/bookmark-pokemon.service';
import { PokeAPIService } from 'src/app/Services/poke-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  loading: boolean = true;
  pokemonListDetail: MainListResponse = {
    count: 0,
    next: "",
    previous: "",
    results: []
  };

  constructor(private _api: PokeAPIService, private bookmarkedService: BookmarkPokemonService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.fetchPokemon();
  }

  fetchPokemon() {
    this.spinner.show();
    this._api.getPokemonList().subscribe(response => {
      this.pokemonListDetail = response;
      this.pokemonListDetail.results.forEach(pokemon => {
        pokemon.id = this._api.getPokemonId(pokemon.url);
        pokemon.isBookmarked = this.bookmarkedService.checkIfPokemonIsBookmarked(pokemon.id);
      })
      this.loading = false;
      this.spinner.hide();
    });
  }
}
