import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBZComponent } from './pages/main-page-component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [DBZComponent, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule
  ],
  exports:[DBZComponent]
})
export class DbzModule { }
