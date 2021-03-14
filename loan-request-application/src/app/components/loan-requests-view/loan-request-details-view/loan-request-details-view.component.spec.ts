import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestDetailsViewComponent } from './loan-request-details-view.component';

describe('LoanRequestDetailsViewComponent', () => {
  let component: LoanRequestDetailsViewComponent;
  let fixture: ComponentFixture<LoanRequestDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanRequestDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
