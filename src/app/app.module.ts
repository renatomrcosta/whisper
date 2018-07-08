import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialWrapperModule} from "./material-wrapper/material-wrapper.module";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
