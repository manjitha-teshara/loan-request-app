import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { Customer, Representative } from '../shared/Models/customer';
import { CustomerService } from '../shared/services/customer.service';
import { Loan } from '../shared/Models/loan';
import {LoanRequestService} from "../../services/loan-request.service";

@Component({
  selector: 'app-loan-requests-view',
  templateUrl: './loan-requests-view.component.html',
  styleUrls: ['./loan-requests-view.component.css']
})
export class LoanRequestsViewComponent implements OnInit {

  loans: Loan[] = [];
  loanFormVisible = false;

  constructor(private loanRequestService: LoanRequestService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

  }

  showLoanRequestForm(): void {
    this.loanFormVisible = true;
  }

  // tslint:disable-next-line:typedef
  async getAll() {
    const getall = await this.loanRequestService.getAllLoanRequest().toPromise(
    );
    this.loans = getall;
  }
}
