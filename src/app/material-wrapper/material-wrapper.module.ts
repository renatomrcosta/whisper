import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatListModule} from '@angular/material';
import {MatGridListModule} from "@angular/material";
import {MatCardModule} from "@angular/material";
import {MatInputModule} from "@angular/material";
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from "@angular/material";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import {MatMenuModule} from "@angular/material";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

loadIcons();

function loadIcons() {
  library.add(
    faGoogle,
    faComments,
    faBars,
    faSignOutAlt
  );
}

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: []
})
export class MaterialWrapperModule { }
