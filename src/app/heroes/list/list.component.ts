import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroNames:string []=['Spider','Hulk','Batman'];
public deleteHero?:string;

public removeHero():void{
this.deleteHero=this.heroNames.pop();
}
}
