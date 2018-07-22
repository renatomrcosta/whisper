import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {AuthProviders} from "../auth/authProviders";
import {Router} from "@angular/router";
import {AfterViewInit} from "@angular/core";
import {AfterViewChecked} from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  loginGoogle() {
    this.authService.login(AuthProviders.Google).then(() => this.navigateHome());
  }

  loginFacebook() {
    this.authService.login(AuthProviders.Facebook).then(() => this.navigateHome());
  }

  loginTwitter() {
    this.authService.login(AuthProviders.Twitter).then(() => this.navigateHome());
  }

  loginGithub() {
    this.authService.login(AuthProviders.Github).then(() => this.navigateHome());
  }

  private navigateHome() {
      this.router.navigate(['/rooms']);
  }

  isUserLoggedIn(): boolean {
    return this.authService.isLogged();
  }
}
