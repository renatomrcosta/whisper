import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/internal/Observable";
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.authState
      .pipe(
        map(authState => !!authState),
        tap(authenticated => {
          if(!authenticated){
            this.router.navigate(["/login"]);
          }
        }));
  }


}
