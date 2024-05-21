import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class DBZComponent  {
  constructor(private dbzComponent:DbzService){}

  get characters():Character[]{
    return [...this.dbzComponent.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzComponent.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzComponent.onNewCharacter(character);
  }
}
