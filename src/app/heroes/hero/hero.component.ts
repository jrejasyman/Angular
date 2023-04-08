import { Component } from '@angular/core';

export interface Heroe{
  supername: string;
  realname: string;
  age: number;
  country: string; 
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  heroeSelected: Heroe = {
    supername: 'Sin nombre',
    realname: 'No tiene',
    age: 0,
    country: 'Sin país'
  };

  heroes: Heroe[] =[
    {
      supername: 'Spiderman',
      realname: 'Peter Parker',
      age: 16,
      country: 'Colombia'
    },
    {
      supername: 'Ironman',
      realname: 'Tony Stark',
      age: 40,
      country: 'Ecuador'
    },
    {
      supername: 'Capitan America',
      realname: 'Steve Rogers',
      age: 80,
      country: 'Bolivia'
    },
    {
      supername: 'Thor',
      realname: 'Thor',
      age: 200,
      country: 'Perú'
    }
  ];


  changeHero(hero: Heroe){
    this.heroeSelected = hero;
  }
}
