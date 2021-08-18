import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeInterface } from '@app/heroes/interfaces/heroe-interface';
import { HeroesService } from '@app/heroes/services/heroes.service';

@Component({
  selector: 'app-carrousel-heroes',
  templateUrl: './carrousel-heroes.component.html',
  styleUrls: ['./carrousel-heroes.component.scss'],
})
export class CarrouselHeroesComponent implements OnInit {
  heroes: HeroeInterface[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
    console.log(this.heroes);
  }

  getHeroes() {
    this.heroes = this.heroesService.getAllSuperheroes();
  }

  viewMore(id: number) {
    this.router.navigate(['/heroes/showHeroe', id]);
  }
}
