import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialWrapperModule} from "./material-wrapper/material-wrapper.module";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {RouterModule} from "@angular/router";
import {Routes} from "@angular/router";
import {LoginModule} from "./login/login.module";
import {AngularFireAuthModule} from "angularfire2/auth";
import {MessagesModule} from "./messages/messages.module";
import {RoomsModule} from './rooms/rooms.module';
import { HeaderComponent } from './header/header.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/rooms',  pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),

    LoginModule,
    RoomsModule,
    MessagesModule,
    MaterialWrapperModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
