import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { User } from "../models/User";
import { Gender } from "../models/Gender";
import { isNumber } from "util";
import { UserService } from "../services/user/user.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myForm: FormGroup;
  post: any;
  keys: Array<string>;
  formHeader: string;
  private sub: any;
  @Input() user: User;

  constructor(private _fb: FormBuilder, private _userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Get values from enum
    this.keys = Object.keys(Gender).map(k => Gender[k]).filter(v => typeof v === "string") as string[];

    this.sub = this.route.params.subscribe(params => {

      if (params['id']) {
        this._userService.getUserById(params['id']).subscribe(user => {
          debugger;
          this.user = user;
        });
      }

      
      this.formHeader = params['id'] ? "Edit" : "Add";
      debugger;
   });

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

      debugger;
    if (this.user){
      this._userService.putUser(this.user);
    }else {
      this._userService.addUser(user);
    }

  }

}
