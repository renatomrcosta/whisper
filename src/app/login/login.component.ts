import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {AuthProviders} from "../auth/authProviders";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.login(AuthProviders.Google).then(() => {
      this.router.navigate(['/rooms']);
    });
  }
}
