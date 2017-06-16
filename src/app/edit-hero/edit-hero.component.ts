import { Component, Input, OnInit } from '@angular/core';
import { Superhero } from '../superhero.model';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
  providers: [RosterService]
})
export class EditHeroComponent implements OnInit {
  @Input() selectedHero;

  constructor(private rosterService: RosterService) { }

  ngOnInit() {
  }

  beginUpdatingHero(selectedHero) {
    this.rosterService.updateHero(selectedHero);
  }

}
