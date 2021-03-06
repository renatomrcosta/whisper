import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {MaterialWrapperModule} from '../material-wrapper/material-wrapper.module';

const ROUTES: Routes = [
  {path: 'rooms', component: RoomsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialWrapperModule
  ],
  exports: [
    RoomsComponent
  ],
  declarations: [RoomsComponent]
})
export class RoomsModule { }
