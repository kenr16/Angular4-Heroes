import { Component, OnInit } from '@angular/core';
import { Superhero } from '../superhero.model';
import { Router } from '@angular/router';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [RosterService]
})
export class WelcomeComponent implements OnInit {
  heroes;
  teamFilter: string = 'allTeams';
  affiliationFilter: string = 'all';
  currentRoute: string = this.router.url;
  minBarValue: number = 0;
  maxBarValue: number = 10;

  constructor(private router: Router, private rosterService: RosterService) {}

  ngOnInit() {
    this.heroes = this.rosterService.getHeroes();
  }

  goToDetailPage(superhero) {
     this.router.navigate(['heroes', superhero.$key]);
   };

   onChangeTeam(selectedTeam) {
     this.teamFilter = selectedTeam;
   }

   onChangeAffiliation(selectedAffiliation) {
     this.affiliationFilter = selectedAffiliation;
   }

   showMinValue(newValue) {
     this.minBarValue = newValue;
   }

   showMaxValue(newValue) {
     this.maxBarValue = newValue;
   }




}
