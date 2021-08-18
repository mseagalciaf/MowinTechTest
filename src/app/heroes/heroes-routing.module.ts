import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselHeroesComponent } from './components/carrousel-heroes/carrousel-heroes.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { ShowHeroeComponent } from './components/show-heroe/show-heroe.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListHeroesComponent,
  },
  {
    path: 'carrousel',
    component: CarrouselHeroesComponent,
  },
  {
    path: 'showHeroe/:id',
    component: ShowHeroeComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
