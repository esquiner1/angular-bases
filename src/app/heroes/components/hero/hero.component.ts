import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'iron man';
  public age:number = 45;
  public habilitadorHero:boolean=true;
  public habilitadorAge:boolean=true;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name = 'spiderman';
    this.habilitadorHero=false
  }
  changeAge():void{
    this.age = 25;
    this.habilitadorAge=false
  }


}
