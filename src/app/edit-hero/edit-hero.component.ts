import { Component, Input, OnInit } from '@angular/core';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() selectedHero;

  constructor() { }

  ngOnInit() {
  }

}
