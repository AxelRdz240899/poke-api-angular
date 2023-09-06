import { TestBed } from '@angular/core/testing';

import { BookmarkPokemonService } from './bookmark-pokemon.service';

describe('BookmarkPokemonService', () => {
  let service: BookmarkPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
