import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: ` <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(0)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button> `,

}) //? Decorador  que  transforma mi clase en un componente
export class CounterComponent{
  public counter:number = 10;

  increaseBy(number:number):void {
    if(number===1){
      this.counter +=1;
    }if(number === 0){
      this.counter =10;
    }if(number===-1){
      this.counter -=1;
    }
  }

}




