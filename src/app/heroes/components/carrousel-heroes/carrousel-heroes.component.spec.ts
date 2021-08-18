import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselHeroesComponent } from './carrousel-heroes.component';

describe('CarrouselHeroesComponent', () => {
  let component: CarrouselHeroesComponent;
  let fixture: ComponentFixture<CarrouselHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrouselHeroesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
