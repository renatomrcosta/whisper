import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import {RouterModule} from "@angular/router";
import {Routes} from "@angular/router";
import {AuthGuard} from "../auth/auth.guard";
import {MaterialWrapperModule} from "../material-wrapper/material-wrapper.module";

const ROUTES: Routes = [
  {path: '/messages', component: MessagesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialWrapperModule
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule { }
