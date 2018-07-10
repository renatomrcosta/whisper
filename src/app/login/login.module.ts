import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {AuthModule} from "../auth/auth.module";
import {MaterialWrapperModule} from "../material-wrapper/material-wrapper.module";


const routes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthModule,
    MaterialWrapperModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
