import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthViewCustomerComponent } from './auth-view-customer.component';

describe('AuthViewCustomerComponent', () => {
  let component: AuthViewCustomerComponent;
  let fixture: ComponentFixture<AuthViewCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthViewCustomerComponent]
    });
    fixture = TestBed.createComponent(AuthViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
