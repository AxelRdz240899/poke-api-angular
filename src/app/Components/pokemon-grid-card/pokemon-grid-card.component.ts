import { Component, Input } from '@angular/core';
import { PokemonInMainList } from 'src/app/Interfaces/PokeAPIModels';

@Component({
  selector: 'pokemon-grid-card',
  templateUrl: './pokemon-grid-card.component.html',
  styleUrls: ['./pokemon-grid-card.component.css']
})
export class PokemonGridCardComponent {
  @Input() pokemonInformation: PokemonInMainList = {
    name: "",
    url: "",
    id: "-1"
  };
}
