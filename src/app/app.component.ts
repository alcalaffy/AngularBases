import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'bases';
  counter:number=11;
  originalCounter:number=this.counter;

  increaseCounter():void{
    this.counter+=1;
  }

  decreaseCounter():void{
    this.counter-=1;
  }

  resetCounter():void{
    this.counter=this.originalCounter;
  }
}
