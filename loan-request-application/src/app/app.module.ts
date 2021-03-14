import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { CustomerService } from './components/shared/services/customer.service';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoanRequestFormComponent } from './components/loan-request-form/loan-request-form.component';
import { LoanRequestsViewComponent } from './components/loan-requests-view/loan-requests-view.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { LoanRequestDetailsViewComponent } from './components/loan-requests-view/loan-request-details-view/loan-request-details-view.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    PaginatorModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoanRequestFormComponent,
    LoanRequestsViewComponent,
    LoanRequestDetailsViewComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    CustomerService,
    HeaderComponent,
    FooterComponent,
    LoanRequestFormComponent,
    LoanRequestsViewComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoanRequestFormComponent,
    LoanRequestsViewComponent
  ]
})

export class AppModule { }
