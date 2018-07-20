import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RoomsComponent
  ],
  declarations: [RoomsComponent]
})
export class RoomsModule { }
