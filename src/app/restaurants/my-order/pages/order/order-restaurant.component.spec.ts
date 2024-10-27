import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRestaurantComponent } from './order-restaurant.component';

describe('OrderComponent', () => {
  let component: OrderRestaurantComponent;
  let fixture: ComponentFixture<OrderRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
