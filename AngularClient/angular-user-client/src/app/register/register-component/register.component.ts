import { Component, OnInit, NgZone } from '@angular/core';
import { ComponentModalConfig, ModalSize, SuiModal } from 'ng2-semantic-ui';

import * as firebase from 'firebase/app';
import { AuthenticationLoginService } from "../../services/auth/authenticationlogin.service";
import { AuthenticationEventService } from "../../services/events/authentication-event/authentication-event.service";
import { JwtHelper } from "../../helpers/JwtHelper";

export class RegisterModal extends ComponentModalConfig<void> {
  constructor() {
    super(RegisterComponent);
    this.size = ModalSize.Tiny;
    this.transitionDuration = 300;
    this.isInverted = true;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private currentUser: firebase.User = null;  
  error: boolean = false;
  
  isLogged: boolean;  

  floader: boolean;
  gloader: boolean;
  tloader: boolean;

  constructor(
    public modal: SuiModal<void>,
    public authLoginService: AuthenticationLoginService,
    private authEventService: AuthenticationEventService,
    private zone: NgZone) 
    {
      this.authLoginService.signOut();
      this.isLogged = false;
      this.error = false;
    }

  ngOnInit() {
    this.authLoginService.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        
      } else {
        this.currentUser = null;
      }
    });
  }

  ngOnDestroy() {
    this.error = false;
    this.isLogged = false;
  }

  isLoading(): boolean {
    return this.floader || this.gloader || this.tloader;
  }

  handleResponse(resp: any): void {
    switch (resp.status) {
      case 204: {
        this.error = false;
        this.zone.run(() => this.isLogged = !this.isLogged);
        break;
      }
      case 200: {
        this.authLoginService.saveJwt(resp.headers.get('token'));

        this.modal.deny(null);
        this.authEventService.signIn();

        this.error = false;
        break;
      }
      default: {
        this.handleErrorLogin();
        break;
      }
    }
  }

  handleErrorLogin() {
    this.zone.run(() => this.error = true);
  }

  loginWithGoogle() {
    this.gloader = true;
    this.authLoginService.loginWithGoogle()
      .then(resp => {
        this.gloader = false;
        this.handleResponse(resp);
      })
      .catch(err => {
        this.gloader = false;
        this.handleErrorLogin();
      });
  }

  // loginWithFacebook() {
  //   this.floader = true;
  //   this.authLoginService.loginWithFacebook()
  //     .then(resp => {
  //       this.floader = false;
  //       this.handleResponse(resp);
  //     })
  //     .catch(err => {
  //       this.floader = false;
  //       this.handleErrorLogin();
  //     });
  // }

  // loginWithTwitter() {
  //   this.tloader = true;
  //   this.authLoginService.loginWithTwitter()
  //     .then(resp => {
  //       this.tloader = false;
  //       this.handleResponse(resp);
  //     })
  //     .catch(err => {
  //       this.tloader = false;
  //       this.handleErrorLogin();
  //     });
  // }

}
