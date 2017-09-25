import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user/user.service";
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { User } from "../models/User";
import { Gender} from "../models/Gender";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: Observable<User[]>;
  genderType: any = Gender;
  sortType: string;
  sortReverse: boolean;

  constructor(private userService: UserService, private http: Http, private router: Router) { 
    this.sortType = 'name';
    this.sortReverse = false;
  }

  ngOnInit() {
    this.updateUsers();    
  }

  updateUsers() { 
    this.users = this.userService.getUsers();
  }

  onDeleteUser(id: number) : void {
    debugger;
    this.userService.deleteUser(id).then(() => this.updateUsers());
  }

  onEditUser(id: number) : void {
    debugger
    this.router.navigate(['../user', id]);
  }

  setOrder(value: string) {
    if (this.sortType === value) {
      this.sortReverse = !this.sortReverse;
    }

    this.sortType = value;
  }

}
