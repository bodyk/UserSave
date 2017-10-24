import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiBaseService {
  protected baseRequest = 'http://localhost:52818/api/';

  constructor(protected http: Http) { }

  protected get(getRequest: string) {
    return this.http.get(getRequest)
      .map(res => res.json());
  }

  protected async delete(deleteRequest: string): Promise<any> {
    return await this.http.delete(deleteRequest).toPromise();
  }

  protected async post(postRequest: string, content: any): Promise<any> {
    return await this.http.post(postRequest, content).toPromise();
  }

  protected async put(putRequest: string, content: any): Promise<any> {
    return await this.http.put(putRequest, content).toPromise();
  }
}
