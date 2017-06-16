import { Component, OnInit } from '@angular/core';
import { Superhero } from '../superhero.model';
import { RosterService } from '../roster.service';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RosterService, AngularFireAuth]
})
export class AdminComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private rosterService: RosterService, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  submitForm(alias: string, name: string, superpower: string, powerlevel: number, bio: string, team: string, affiliation: string, photosmall: string, photolarge: string) {
    var newHero: Superhero = new Superhero( 10, alias, name, superpower, powerlevel, bio, team, affiliation, photosmall, photolarge);
    console.log(newHero);
    this.rosterService.addHero(newHero);
  }


}
