import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoanRequestFormComponent} from './components/loan-request-form/loan-request-form.component';
import {LoanRequestsViewComponent} from './components/loan-requests-view/loan-requests-view.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'request-form',
    component: LoanRequestFormComponent
  },
  {
    path: 'loan-requests-view',
    component: LoanRequestsViewComponent
  }
];

