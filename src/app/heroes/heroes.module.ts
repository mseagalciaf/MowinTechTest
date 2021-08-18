import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { CarrouselHeroesComponent } from './components/carrousel-heroes/carrousel-heroes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@app/material.module';
import { ShowHeroeComponent } from './components/show-heroe/show-heroe.component';

@NgModule({
  declarations: [ListHeroesComponent, CarrouselHeroesComponent, ShowHeroeComponent],
  imports: [CommonModule, HeroesRoutingModule, NgbModule, MaterialModule],
})
export class HeroesModule {}
