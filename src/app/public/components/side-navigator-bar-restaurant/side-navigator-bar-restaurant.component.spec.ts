import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigatorBarRestaurantComponent } from './side-navigator-bar-restaurant.component';

describe('SideNavigatorBarComponent', () => {
  let component: SideNavigatorBarRestaurantComponent;
  let fixture: ComponentFixture<SideNavigatorBarRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavigatorBarRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavigatorBarRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
