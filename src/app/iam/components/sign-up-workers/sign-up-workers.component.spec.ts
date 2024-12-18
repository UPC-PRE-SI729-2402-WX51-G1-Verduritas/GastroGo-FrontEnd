import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpWorkersComponent } from './sign-up-workers.component';

describe('SignUpWorkersComponent', () => {
  let component: SignUpWorkersComponent;
  let fixture: ComponentFixture<SignUpWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpWorkersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
