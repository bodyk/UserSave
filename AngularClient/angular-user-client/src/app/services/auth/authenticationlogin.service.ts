import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../data/data.service';
import { UserAuth } from '../../models/userauth';
import { AuthenticationEventService } from '../events/authentication-event/authentication-event.service';

@Injectable()
export class AuthenticationLoginService {
  public authState: Observable<firebase.User>
  private apiController: string;

  constructor(public afAuth: AngularFireAuth, public httpService: DataService, private authEventService: AuthenticationEventService) {
    httpService.setHeader('Content-Type', 'application/json');
    this.authState = this.afAuth.authState;
    this.apiController = '/api/membership';
  }

  private initializeUser(data): UserAuth {
    return {
      provider: data.providerData[0].providerId,
      uid: data.uid
    }
  }

  public loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        return this.initializeUser(data.user);
      })
      .then(user => {
        return this.httpService.postFullRequest(this.apiController, user);
      });
  }

  public loginWithFacebook() {
    debugger;
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(data => {
        debugger;
        return this.initializeUser(data.user);
      })
      .then(user => {
        debugger;
        return this.httpService.postFullRequest(this.apiController, user);
      });
  }

  public loginWithTwitter() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(data => {
        return this.initializeUser(data.user);
      })
      .then(user => {
        return this.httpService.postFullRequest(this.apiController, user);
      });
  }

  public saveJwt(token: string) {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  public signOut() {
    localStorage.removeItem('token');
    this.afAuth.auth.signOut();
    this.authEventService.signOut();
  }
}