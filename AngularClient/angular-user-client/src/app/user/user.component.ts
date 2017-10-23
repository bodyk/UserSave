import { Component, OnInit, Input } from '@angular/core';
import { User } from "../models/User";
import { Gender } from "../models/Gender";
import { isNumber } from "util";
import { UserService } from "../services/user/user.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  post: any;
  keys: Array<string>;
  header: string;
  isEdit: boolean = false;
  private sub: any;
  @Input() user: User;

  constructor(private _userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
    // Get values from enum
    this.keys = Object.keys(Gender).map(k => Gender[k]).filter(v => typeof v === "string") as string[];

    this.sub = this.route.params.subscribe(params => {
      this.header = "Add";
      if (params['id']) {
        this._userService.getUserById(params['id']).subscribe(user => {
          this.user = user;
          this.isEdit = true;
          this.header = "Edit";
        });
      }
   });
  }

  onAddUser() : void {
    if (this.isEdit){
      this._userService.putUser(this.user).then(() => {
        this.router.navigate(['/dashboard']);        
      });
    }else {
      console.log(this.user);
      this._userService.addUser(this.user).then(() => {
        this.router.navigate(['/dashboard']);    
      });
    }
  }

  SelectGenderChanged($event) {
    this.user.Gender = parseInt(Gender[$event.target.value]);
  }

  isSelected(key) {
    if (this.isEdit) {
      return key === Gender[this.user.Gender];
    }

    return true;
  }
}
