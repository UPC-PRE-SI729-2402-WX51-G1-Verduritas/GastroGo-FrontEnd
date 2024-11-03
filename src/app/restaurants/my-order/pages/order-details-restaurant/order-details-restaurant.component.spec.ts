import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsRestaurantComponent } from './order-details-restaurant.component';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsRestaurantComponent;
  let fixture: ComponentFixture<OrderDetailsRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailsRestaurantComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
