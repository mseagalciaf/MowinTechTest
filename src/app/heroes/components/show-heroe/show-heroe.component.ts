import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeroeInterface } from '@app/heroes/interfaces/heroe-interface';
import { HeroesService } from '@app/heroes/services/heroes.service';

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styleUrls: ['./show-heroe.component.scss'],
})
export class ShowHeroeComponent implements OnInit {
  heroe: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroe();
  }

  getHeroe() {
    let id = this.route.snapshot.params.id;
    this.heroe = this.heroesService.getOneSuperheroe(id);
  }

  goToBack() {
    this.location.back();
  }
}
