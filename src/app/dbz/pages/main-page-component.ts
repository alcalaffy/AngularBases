import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class DBZComponent  {
public characters:Character[]=[{
  name:"Goku",
  power:9000
},{
  name:"Krillin",
  power:3000
}];

onNewCharacter(character:Character):void{
  this.characters.push(character);
}
onDeleteCharacter(index:number):void{
  this.characters.splice(index,1);
}
}
