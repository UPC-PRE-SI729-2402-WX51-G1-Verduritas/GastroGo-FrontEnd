import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelOrderDialogWorkersComponent } from './cancel-order-dialog-workers.component';

describe('CancelOrderDialogComponent', () => {
  let component: CancelOrderDialogWorkersComponent;
  let fixture: ComponentFixture<CancelOrderDialogWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelOrderDialogWorkersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelOrderDialogWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
