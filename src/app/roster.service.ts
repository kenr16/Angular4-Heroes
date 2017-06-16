import { Injectable } from '@angular/core';
import { Superhero } from './superhero.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RosterService {
  heroes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.heroes = database.list('heroes');
  }

  getHeroes() {
    return this.heroes;
  }

  getHeroById(heroId: number){
    // for (var i = 0; i <= HEROES.length - 1; i++) {
    //   if (HEROS[i].id === heroId) {
    //     return HEROES[i];
    //   }
    // }
  }
}
