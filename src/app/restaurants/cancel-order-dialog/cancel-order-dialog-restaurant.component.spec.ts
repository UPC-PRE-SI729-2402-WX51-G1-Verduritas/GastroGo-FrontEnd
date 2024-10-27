import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelOrderDialogRestaurantComponent } from './cancel-order-dialog-restaurant.component';

describe('CancelOrderDialogComponent', () => {
  let component: CancelOrderDialogRestaurantComponent;
  let fixture: ComponentFixture<CancelOrderDialogRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelOrderDialogRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelOrderDialogRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
