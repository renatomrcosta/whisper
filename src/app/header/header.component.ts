import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router){
  }

  rooms(){
    this.router.navigate(['rooms']);
  }

  isUserLoggedIn(): boolean {
    return this.authService.isLogged();
  }

  logout(): void {
    this.authService.logout();
  }

}
