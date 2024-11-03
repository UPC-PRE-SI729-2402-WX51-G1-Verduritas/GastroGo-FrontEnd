import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodAddedComponent } from './payment-method-added.component';

describe('PaymentMethodAddedComponent', () => {
  let component: PaymentMethodAddedComponent;
  let fixture: ComponentFixture<PaymentMethodAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentMethodAddedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
