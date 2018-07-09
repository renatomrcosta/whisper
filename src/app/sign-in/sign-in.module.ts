import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";


const routes: Routes = [
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
