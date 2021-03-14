import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoanRequestService} from "../../services/loan-request.service";

@Component({
  selector: 'app-loan-request-form',
  templateUrl: './loan-request-form.component.html',
  styleUrls: ['./loan-request-form.component.css']
})
export class LoanRequestFormComponent implements OnInit {

  loanRequestForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.required
    ]),
    nic: new FormControl(null, [
      Validators.pattern('^([0-9]{9})+[vV]$|^[0-9]{12}$'),
      Validators.required
    ]),
    amount: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    interestRate: new FormControl(null, [
      Validators.required
    ]),
    loanTerm: new FormControl(null, [
      Validators.required
    ]),
  });
  public submitted = false;
  constructor(private formBuilder: FormBuilder,private loanRequestService: LoanRequestService) { }

  public loanRequestModal = {
    name : null,
    age : null,
    nic : null,
    amount : 0,
    interestRate : 0,
    loanTerm : 0
  }
  monthlyPayment: any;
  // tslint:disable-next-line:typedef
  initFormControllers() {

  }

  ngOnInit(): void {
    this.initFormControllers();
  }

  // tslint:disable-next-line:typedef
  get name() { return this.loanRequestForm.get('name'); }
  // tslint:disable-next-line:typedef
  get age() { return this.loanRequestForm.get('age'); }
  // tslint:disable-next-line:typedef
  get nic() { return this.loanRequestForm.get('nic'); }
  // tslint:disable-next-line:typedef
  get amount() { return this.loanRequestForm.get('amount'); }
  // tslint:disable-next-line:typedef
  get interestRate() { return this.loanRequestForm.get('interestRate'); }
  // tslint:disable-next-line:typedef
  get loanTerm() { return this.loanRequestForm.get('loanTerm'); }



  // tslint:disable-next-line:typedef
  monthlyPaymentCal() {
    // tslint:disable-next-line:max-line-length
    if (this.loanRequestForm.value.amount != null && this.loanRequestForm.value.interestRate != null && this.loanRequestForm.value.loanTerm != null) {
      // tslint:disable-next-line:max-line-length
      this.monthlyPayment = this.loanRequestForm.value.amount * (100 + this.loanRequestForm.value.interestRate) / (this.loanRequestForm.value.loanTerm + 100);
    }
    console.log(this.loanRequestForm.value);
  }


  // tslint:disable-next-line:typedef
  submitLoanRequest() {
    this.submitted = true;
    if (this.loanRequestForm.invalid) {
      return;
    }
    console.log(this.loanRequestForm.value);
    this.loanRequestService.createLoanRequest(this.loanRequestForm.value);
  }

  // tslint:disable-next-line:typedef
  resetForm() {
    this.submitted = false;
    this.loanRequestForm.reset();
  }

}
