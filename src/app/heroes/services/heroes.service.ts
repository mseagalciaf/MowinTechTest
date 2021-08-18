import { Injectable } from '@angular/core';
import { HeroeInterface } from '../interfaces/heroe-interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroes: HeroeInterface[] = [
    {
      id: 1,
      name: 'Super Man',
      image: 'assets/superman.jpg',
      description:
        'Superman es un superhéroe ficticio que apareció por primera vez en los cómics estadounidenses publicados por DC Comics',
      published: '2021',
      autor: 'Marvel1',
      country: 'Colombia',
    },
    {
      id: 2,
      name: 'Batman',
      image: 'assets/batman.jpg',
      description:
        'Batman es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger, ​ y propiedad de DC Comics',
      published: '2020',
      autor: 'Marvel2',
      country: 'Peru',
    },
    {
      id: 3,
      name: 'Hulk',
      image: 'assets/hulk.jpg',
      description:
        'Hulk es un personaje ficticio, un superhéroe que aparece en los cómics estadounidenses publicados por la editorial Marvel Comics',
      published: '2019',
      autor: 'Marvel3',
      country: 'Brasil',
    },
    {
      id: 4,
      name: 'Capitan Amrerica',
      image: 'assets/capitanamerica.jpg',
      description: 'El Capitán América, cuyo nombre real es Steve Grant Rogers',
      published: '2018',
      autor: 'Marvel4',
      country: 'India',
    },
    {
      id: 5,
      name: 'Iron man',
      image: 'assets/ironman.jpg',
      description:
        'Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo',
      published: '2017',
      autor: 'Marvel5',
      country: 'Haiti',
    },
  ];

  constructor() {}

  getAllSuperheroes() {
    return this.heroes;
  }

  getOneSuperheroe(id: number) {
    return this.heroes.find((heroe) => heroe.id == id);
  }
}
