import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
public characters:Character[]=[{
  name:"Trunks",
  power:1
}];

emitIndex(index:number):void{
}

@Output()
public onDeleteCharacter:EventEmitter<string>=new EventEmitter();

//emitDeleteIndex(index:number):void{
// this.onDeleteCharacter.emit(index);
//}
emitDeleteId(id?:string):void{
  if(!id){return;}
  this.onDeleteCharacter.emit(id);
}
}
