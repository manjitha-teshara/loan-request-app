import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) { }

  getCustomersLarge(): Promise<any> {
    return this.http.get<any>('assets/customers-large.json')
      .toPromise()
      .then(res => res.data)
      .then(data => {
        return data;
      });
  }
}
