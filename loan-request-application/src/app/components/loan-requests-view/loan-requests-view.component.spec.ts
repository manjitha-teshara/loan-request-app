import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestsViewComponent } from './loan-requests-view.component';

describe('LoanRequestsViewComponent', () => {
  let component: LoanRequestsViewComponent;
  let fixture: ComponentFixture<LoanRequestsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanRequestsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
