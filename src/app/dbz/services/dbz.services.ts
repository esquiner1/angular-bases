import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzServices {
  public characters: Character[] = [{
    name:'Krillin',
    power:1000,
    id:uuid(),
  },
  {
    name:'Goku',
    power:9500,
    id:uuid(),
  },
  {
    name:'Vegeta',
    power:7500,
    id:uuid(),
  }];

  addNewCharacter(Character:Character):void {
    const newCharacter: Character = {id:uuid(), ...Character} //forma de agregar un nuevo parametro a un arreglo
    this.characters.push(newCharacter);//---> inserta un nuevo elemento al principio
    // this.characters.unshift(Character); //---> inserta un nuevo elemento al final
    console.log(this.characters);

  }
  // onDeleteCharater(index:number):void{
  //   this.characters.splice(index, 1); // ---> Me elimina un elemento
  // };

  onDeleteCharaterById(id:string){
    this.characters = this.characters.filter(character => character.id != id);
  }



}
