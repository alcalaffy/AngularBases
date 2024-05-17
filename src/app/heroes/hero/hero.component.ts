import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public age:number=21;
public name:string="Spiderman";

changeHero():void{
this.name="Ironman";
}

changeAge():void{
this.age=45;
}

reset():void{
  this.name="Spiderman";
  this.age=21;
}
}
