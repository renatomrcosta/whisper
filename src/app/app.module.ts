import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialWrapperModule} from "./material-wrapper/material-wrapper.module";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot([], {useHash: false}),

    LoginModule,
    MaterialWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
