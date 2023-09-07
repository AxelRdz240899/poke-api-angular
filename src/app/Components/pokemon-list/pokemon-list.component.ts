import { Component, HostListener, OnInit } from '@angular/core';
import { MainListResponse } from 'src/app/Interfaces/PokeAPIModels';
import { BookmarkPokemonService } from 'src/app/Services/bookmark-pokemon.service';
import { PokeAPIService } from 'src/app/Services/poke-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Pokemon } from 'src/app/Interfaces/PokeAPIModels';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  havePokemonLeft: boolean = true;
  loading: boolean = true;
  pokemonList: Array<Pokemon> = [];
  offset: number = 0;
  alreadyLoadingPokemon: boolean = false;

  constructor(private _api: PokeAPIService, private bookmarkedService: BookmarkPokemonService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.fetchPokemon();
  }

  fetchPokemon() {
    if (!this.alreadyLoadingPokemon && this.havePokemonLeft) {
      this.alreadyLoadingPokemon = true;
      this.spinner.show();
      this._api.getPokemonList(this.offset).subscribe(response => {
        this.addPokemonToExistingList(response);
        this.loading = false;
        this.spinner.hide();
        this.offset += this._api.limit;
      });
    }
  }

  addPokemonToExistingList(pokemonListDetail: MainListResponse) {
    this.pokemonList.push(...pokemonListDetail.results);
    this.pokemonList.forEach(pokemon => {
      pokemon.id = this._api.getPokemonId(pokemon.url);
      pokemon.isBookmarked = this.bookmarkedService.checkIfPokemonIsBookmarked(pokemon.id);
    })
    this.havePokemonLeft = pokemonListDetail.next != null ? true : false;
    this.alreadyLoadingPokemon = false;
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.fetchPokemon();
    }
  }
}
