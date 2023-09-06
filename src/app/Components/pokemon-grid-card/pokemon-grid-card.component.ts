import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/PokeAPIModels';

@Component({
  selector: 'pokemon-grid-card',
  templateUrl: './pokemon-grid-card.component.html',
  styleUrls: ['./pokemon-grid-card.component.css']
})
export class PokemonGridCardComponent {
  @Input() pokemonInformation: Pokemon = {
    name: "",
    url: "",
    id: "-1"
  };
}
