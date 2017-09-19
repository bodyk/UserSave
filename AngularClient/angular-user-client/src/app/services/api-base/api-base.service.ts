import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiBaseService {
  protected baseRequest: string = "http://localhost:52818/api/";

  constructor(protected http: Http) { }

  protected get(getRequest: string) {
    return this.http.get(getRequest)
      .map(res => res.json());
  }

  protected delete(deleteRequest: string): Promise<any> {
    return this.http.delete(deleteRequest).toPromise();
  }

  protected post(postRequest: string, content: any): Promise<any> {
    return this.http.post(postRequest, content).toPromise();
  }
}
