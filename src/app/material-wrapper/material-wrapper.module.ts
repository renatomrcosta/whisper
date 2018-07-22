import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatListModule} from '@angular/material';
import {MatIconModule} from "@angular/material";
import {MatGridListModule} from "@angular/material";
import {MatCardModule} from "@angular/material";
import {MatInputModule} from "@angular/material";
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule
  ],
  declarations: []
})
export class MaterialWrapperModule { }
