import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialWrapperModule} from "./material-wrapper/material-wrapper.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
