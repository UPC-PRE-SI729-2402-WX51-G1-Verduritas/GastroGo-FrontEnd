import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRecoverPasswordComponent } from './successful-recover-password.component';

describe('SuccesfulRecoverPasswordComponent', () => {
  let component: SuccessfulRecoverPasswordComponent;
  let fixture: ComponentFixture<SuccessfulRecoverPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulRecoverPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulRecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
