import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-loan-request-details-view',
  templateUrl: './loan-request-details-view.component.html',
  styleUrls: ['./loan-request-details-view.component.css']
})
export class LoanRequestDetailsViewComponent implements OnInit {

  loanRequestForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
    ]),
    age: new FormControl(null),
    nic: new FormControl(null, [
      Validators.pattern('^([0-9]{9})+[vV]$|^[0-9]{12}$')
    ]),
    amount: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    interestRate: new FormControl(null),
    loanTerm: new FormControl(null),
  });
  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.loanRequestForm.value);
  }
}
