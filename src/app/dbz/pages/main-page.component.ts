import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor( private dbzServices: DbzServices){}

  get characters(): Character[]{
    return [...this.dbzServices.characters];
  }

  onDeletCharacter(id:string):void{
    this.dbzServices.onDeleteCharaterById( id );
  }
  onNewCharacter(character:Character):void{
    this.dbzServices.addNewCharacter(character)
  }
}
