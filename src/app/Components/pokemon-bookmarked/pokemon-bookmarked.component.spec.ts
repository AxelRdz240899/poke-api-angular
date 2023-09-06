import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBookmarkedComponent } from './pokemon-bookmarked.component';

describe('PokemonBookmarkedComponent', () => {
  let component: PokemonBookmarkedComponent;
  let fixture: ComponentFixture<PokemonBookmarkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonBookmarkedComponent]
    });
    fixture = TestBed.createComponent(PokemonBookmarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
