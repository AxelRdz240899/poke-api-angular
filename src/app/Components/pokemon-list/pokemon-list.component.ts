import { Component, OnInit } from '@angular/core';
import { MainListResponse } from 'src/app/Interfaces/PokeAPIModels';
import { PokeAPIService } from 'src/app/Services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonListDetail: MainListResponse = {
    count: 0,
    next: "",
    previous: "",
    results: []
  };

  constructor(private _api: PokeAPIService) { }

  ngOnInit() {
    this.fetchPokemon();
  }

  fetchPokemon() {
    this._api.getPokemonList().subscribe(response => {
      this.pokemonListDetail = response;
      this.pokemonListDetail.results.forEach(pokemon => {
        pokemon.id = this._api.getPokemonId(pokemon.url);
      })
    });
  }
}
