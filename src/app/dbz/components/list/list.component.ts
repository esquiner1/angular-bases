import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzServices } from '../../services/dbz.services';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [{
    name:'Trunks',
    power:10
  }]

  @Output()
  public onDelet: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string):void{
    console.log('El indice es:', id);
    this.onDelet.emit(id); //---> Estamos emitiendo el indice
  }




}
