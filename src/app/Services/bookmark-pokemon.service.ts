import { Injectable } from '@angular/core';
import { Pokemon } from '../Interfaces/PokeAPIModels';

@Injectable({
  providedIn: 'root'
})
export class BookmarkPokemonService {

  pokemonBookmarkCacheList: Array<Pokemon> = [];
  listCached: boolean = false;

  readonly pokemonListKey = "bookmarkedPokemon";

  bookmarkPokemon(pokemon: Pokemon) {
    var bookmarkedPokemon = this.getBookmarkedPokemon();
    bookmarkedPokemon.push(pokemon);
    this.setPokemonListInLocalStorage(bookmarkedPokemon);
  }

  unbookmarkPokemon(pokemonId: string) {
    var bookmarkedPokemon = this.getBookmarkedPokemon();
    bookmarkedPokemon = bookmarkedPokemon.filter(x => x.id != pokemonId);
    this.setPokemonListInLocalStorage(bookmarkedPokemon);
  }

  private setPokemonListInLocalStorage(pokemonList: Array<Pokemon>) {
    localStorage.setItem(this.pokemonListKey, JSON.stringify(pokemonList));
    this.pokemonBookmarkCacheList = pokemonList;
    this.listCached == true;
  }

  getBookmarkedPokemon(): Array<Pokemon> {
    var localStorageList = localStorage.getItem(this.pokemonListKey);
    var bookmarkedPokemon = Array<Pokemon>();

    if (localStorageList) {
      bookmarkedPokemon = JSON.parse(localStorageList);
    }

    return bookmarkedPokemon;
  }

  checkIfPokemonIsBookmarked(pokemonId: string) {
    if (this.pokemonBookmarkCacheList.length == 0 && this.listCached == false) {
      this.pokemonBookmarkCacheList = this.getBookmarkedPokemon();
    }

    return this.pokemonBookmarkCacheList.find(x => x.id == pokemonId) != null ? true : false;
  }

}
