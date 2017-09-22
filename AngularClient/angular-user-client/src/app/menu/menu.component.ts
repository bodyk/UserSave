import { Component, OnInit } from '@angular/core';
import { TokenHelperService } from "../services/helper/token-helper/token-helper.service";

import { SuiModalService } from 'ng2-semantic-ui';
import { RegisterModal } from '../register/register-component/register.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  isLogged: boolean;

  constructor(private tokenHelper: TokenHelperService,
    private modalService: SuiModalService) { 
    this.isLogged = this.tokenHelper.isTokenValid() && this.tokenHelper.isTokenNotExpired();    
  }

  ngOnInit() {
  }

  openModal() {
    this.modalService.open(new RegisterModal());
  }
}
