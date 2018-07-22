import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {AuthProviders} from "../auth/authProviders";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if(this.authService.isLogged()){
      this.navigateHome();
    }
  }

  loginGoogle() {
    this.authService.login(AuthProviders.Google).then(() => this.navigateHome);
  }

  loginFacebook() {
    this.authService.login(AuthProviders.Facebook).then(() => this.navigateHome);
  }

  loginTwitter() {
    this.authService.login(AuthProviders.Twitter).then(() => this.navigateHome);
  }

  loginGithub() {
    this.authService.login(AuthProviders.Github).then(() => this.navigateHome);
  }

  private navigateHome() {
      this.router.navigate(['/rooms']);
  }
}
