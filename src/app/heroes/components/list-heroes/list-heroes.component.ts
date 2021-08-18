import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeInterface } from '@app/heroes/interfaces/heroe-interface';
import { HeroesService } from '@app/heroes/services/heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss'],
})
export class ListHeroesComponent implements OnInit {
  heroes: HeroeInterface[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroesService.getAllSuperheroes();
  }

  viewMore(id: number) {
    this.router.navigate(['/heroes/showHeroe', id]);
  }
}
