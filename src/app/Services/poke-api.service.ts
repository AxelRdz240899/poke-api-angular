import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainListResponse } from '../Interfaces/PokeAPIModels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private baseUrl: string = "https://pokeapi.co/api/v2";
  private limit: number = 20;
  private offset: number = 0;

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<MainListResponse> {
    return this.http.get<MainListResponse>(`${this.baseUrl}/pokemon?limit=${this.limit}?offset=${this.offset}`);
  }

  getPokemonId(url: string): string {
    return url.split("/")[6];
  }
}
