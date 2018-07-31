import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import {RouterModule} from "@angular/router";
import {Routes} from "@angular/router";
import {AuthGuard} from "../auth/auth.guard";
import {MaterialWrapperModule} from "../material-wrapper/material-wrapper.module";
import { MessageComponent } from './message/message.component';

const ROUTES: Routes = [
  {path: 'rooms/:roomId/messages', component: MessagesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialWrapperModule
  ],
  declarations: [MessagesComponent, MessageComponent]
})
export class MessagesModule { }
