import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolSectionComponent } from './rol-section.component';

describe('RolSectionComponent', () => {
  let component: RolSectionComponent;
  let fixture: ComponentFixture<RolSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
