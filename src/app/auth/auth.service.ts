import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {AuthProviders} from "./authProviders";
import {auth} from "firebase";
import * as firebase from "firebase";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User;
  public authState: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = null;
    this.authState = this.angularFireAuth.authState;

    this.authState.subscribe((user: firebase.User) => {
      this.user = user;
    });
  }

  login(authProvider: AuthProviders) {
    let fireProvider = null;
    switch (authProvider) {
      case AuthProviders.Google:
        fireProvider = new auth.GoogleAuthProvider();
        break;
    }

    this.angularFireAuth.auth
      .signInWithPopup(fireProvider)
      .then((result) => {
        this.user = result.user;
      });
  }
}
