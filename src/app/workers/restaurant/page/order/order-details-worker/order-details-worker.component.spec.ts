import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsWorkerComponent } from './order-details-worker.component';

describe('OrderDetailsWorkerComponent', () => {
  let component: OrderDetailsWorkerComponent;
  let fixture: ComponentFixture<OrderDetailsWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailsWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
