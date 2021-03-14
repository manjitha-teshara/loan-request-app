import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestService {

  constructor(private http: HttpClient) { }

  getAllLoanRequest(): Observable<any> {
    return this.http.get('lcalhost:5001/api/GetAll');
  }

  getLoansByNic(nic: any): Observable<any> {
    const url = 'lcalhost:5001/api/GetByNic/{nic}'.replace('nic', nic);
    return this.http.get(url);
  }

  // tslint:disable-next-line:typedef
  createLoanRequest(request: any) {
    const url = 'lcalhost:5001/api/createLoanRequest';
    return this.http.post(url, request);
  }

}
