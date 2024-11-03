import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWorkersComponent } from './plan-workers.component';

describe('PlanWorkersComponent', () => {
  let component: PlanWorkersComponent;
  let fixture: ComponentFixture<PlanWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanWorkersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
