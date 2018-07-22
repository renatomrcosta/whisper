import {Component} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
