import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpayrollComponent } from './adminpayroll.component';

describe('AdminpayrollComponent', () => {
  let component: AdminpayrollComponent;
  let fixture: ComponentFixture<AdminpayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminpayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
