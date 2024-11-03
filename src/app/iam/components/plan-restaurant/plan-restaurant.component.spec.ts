import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRestaurantComponent } from './plan-restaurant.component';

describe('PlanRestaurantComponent', () => {
  let component: PlanRestaurantComponent;
  let fixture: ComponentFixture<PlanRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
