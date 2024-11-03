import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodNotAddedComponent } from './payment-method-not-added.component';

describe('PaymentMethodNotAddedComponent', () => {
  let component: PaymentMethodNotAddedComponent;
  let fixture: ComponentFixture<PaymentMethodNotAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentMethodNotAddedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodNotAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
