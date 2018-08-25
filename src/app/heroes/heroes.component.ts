import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
  	this.getHeroes();
  }

  getHeroes(): void {
  	this.heroService.getHeroes().subscribe(retHeroes => this.heroes = retHeroes);	
  }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

}
