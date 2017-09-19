import { Injectable } from '@angular/core';
import { ApiBaseService } from "../api-base/api-base.service";
import { Http, Response } from '@angular/http';
import { User } from "../../models/User";


@Injectable()
export class UserService extends ApiBaseService {

  constructor(protected http: Http) { 
    super(http);
    this.baseRequest += "Users/";  
  }

  getUsers() {
    return this.get(this.baseRequest);
  }

  addUser(user: User) : Promise<any> {
    return this.post(this.baseRequest + user.Name, user);
  }

  deleteUser(id: number) : Promise<any> {
    return this.delete(this.baseRequest + '/' + id);
  }
}
