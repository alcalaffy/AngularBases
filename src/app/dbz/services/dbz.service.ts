import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
  public characters:Character[]=[{
    id:uuid(),
    name:"Goku",
    power:9000
  },{
    id:uuid(),
    name:"Krillin",
    power:3000
  }];

  onNewCharacter(character:Character):void{
    let newCharacter:Character={id:uuid(),...character};
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index:number):void{
    //this.characters.splice(index,1);
  //}

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
