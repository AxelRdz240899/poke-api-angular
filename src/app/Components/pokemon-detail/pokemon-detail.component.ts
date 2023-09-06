import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/Interfaces/PokeAPIModels';
import { PokeAPIService } from 'src/app/Services/poke-api.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  loading: boolean = true;
  pokemonDetail: PokemonDetail = {
    name: "",
    abilities: [],
    game_indices: [],
    sprites: {
      back_default: "",
      back_female: "",
      back_shiny: "",
      back_shiny_female: "",
      front_default: "",
      front_female: "",
      front_shiny: "",
      front_shiny_female: ""
    }
  };

  pokemonId: string = "";

  pokemonSprites: Array<string> = [];

  currentSpriteImage: string = "";

  currentSpriteImageIndex: number = -1;

  constructor(private api: PokeAPIService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonId = params["id"];
      this.fetchPokemonDetail();
    })
  }

  fetchPokemonDetail() {
    this.api.getPokemonDetail(this.pokemonId).subscribe(response => {
      this.loading = false;
      this.pokemonDetail = response;
      this.pokemonSprites = Object.values(response.sprites).filter(value => value != null && typeof value == "string");
      this.pokemonSprites.reverse();
      this.initSpriteVariables();
    })
  }

  initSpriteVariables() {
    if (this.pokemonSprites.length > 0) {
      this.currentSpriteImageIndex = 0;
      this.currentSpriteImage = this.pokemonSprites[0];
      this.ChangeSpriteImage();
    }
  }

  ChangeSpriteImage() {
    setTimeout(() => {
      if (this.currentSpriteImageIndex < this.pokemonSprites.length - 1) {
        this.currentSpriteImageIndex++;
      } else {
        this.currentSpriteImageIndex = 0;
      }
      this.currentSpriteImage = this.pokemonSprites[this.currentSpriteImageIndex];
      this.ChangeSpriteImage();
    }, 2000);
  }
}
