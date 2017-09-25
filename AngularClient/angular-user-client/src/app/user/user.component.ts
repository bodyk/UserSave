import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { User } from "../models/User";
import { Gender } from "../models/Gender";
import { isNumber } from "util";
import { UserService } from "../services/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myForm: FormGroup;
  post: any;
  keys: Array<string>;

  constructor(private _fb: FormBuilder, private _userService: UserService) {
  }

  ngOnInit() {
    // Get values from enum
    this.keys = Object.keys(Gender).map(k => Gender[k]).filter(v => typeof v === "string") as string[];

    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      surname: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      email: ['', [<any>Validators.email, <any>Validators.minLength(3)]],
      gender: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
    });
  }

  onAddUser(user: User, isValid: boolean) : void {
    if (!isValid)
      return;

    this._userService.addUser(user);
  }

}
