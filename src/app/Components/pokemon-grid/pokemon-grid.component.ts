import { Component, Input } from '@angular/core';
import { PokemonInMainList } from 'src/app/Interfaces/PokeAPIModels';

@Component({
  selector: 'pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent {
  @Input() pokemonList: PokemonInMainList[] = [];
}
