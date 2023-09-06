import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGridCardComponent } from './pokemon-grid-card.component';

describe('PokemonGridCardComponent', () => {
  let component: PokemonGridCardComponent;
  let fixture: ComponentFixture<PokemonGridCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonGridCardComponent]
    });
    fixture = TestBed.createComponent(PokemonGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
