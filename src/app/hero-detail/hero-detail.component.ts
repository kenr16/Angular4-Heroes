import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Superhero } from '../superhero.model';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [RosterService]
})
export class HeroDetailComponent implements OnInit {
  heroId: number;
  heroToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private rosterService: RosterService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.heroId = parseInt(urlParameters['id']);
    });
    this.rosterService.getHeroById(this.heroId).subscribe(dataLastEmittedFromObserver => {
      this.heroToDisplay = dataLastEmittedFromObserver;
      console.log(this.heroToDisplay);
    })
    
  }

}
