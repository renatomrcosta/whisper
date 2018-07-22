import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {AuthProviders} from "./authProviders";
import {auth} from "firebase";
import * as firebase from "firebase";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User;
  public authState: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.user = null;
    this.authState = this.angularFireAuth.authState;

    this.authState.subscribe((user: firebase.User) => {
      this.user = user;

      //user was logged out
      if(!user){
        this.router.navigate(['/login']);
      }
    });
  }

  login(authProvider: AuthProviders) {
    let fireProvider = null;
    switch (authProvider) {
      case AuthProviders.Facebook:
        fireProvider = new auth.FacebookAuthProvider();
        break;
      case AuthProviders.Google:
        fireProvider = new auth.GoogleAuthProvider();
        break;
      case AuthProviders.Github:
        fireProvider = new auth.GithubAuthProvider();
        break;
      case AuthProviders.Twitter:
        fireProvider = new auth.TwitterAuthProvider();
        break;
    }

    return this.angularFireAuth.auth
      .signInWithPopup(fireProvider)
      .then((result) => {
        this.user = result.user;
      });
  }

  logout(){
    this.angularFireAuth.auth.signOut().then(function () {
      console.log('user logged out');
    });
  }

  isLogged() {
    return this.user !== null;
  }
}
