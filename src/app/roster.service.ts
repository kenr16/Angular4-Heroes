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
    var toReturn = this.database.object('heroes/' + heroId);
    return toReturn;
  }

  addHero(newHero: Superhero) {
    this.heroes.push(newHero);
  }

  updateHero(selectedHero) {
    var heroEntryInFirebase = this.getHeroById(selectedHero.$key);
    heroEntryInFirebase.update({
      alias: selectedHero.alias,
      name: selectedHero.name,
      superpower: selectedHero.superpower,
      powerlevel: selectedHero.powerlevel,
      bio: selectedHero.bio,
      team: selectedHero.team,
      affiliation: selectedHero.affiliation,
      photosmall: selectedHero.photosmall,
      photolarge: selectedHero.photolarge
    });
  }

}
