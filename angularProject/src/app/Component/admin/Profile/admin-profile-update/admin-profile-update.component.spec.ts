import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileUpdateComponent } from './admin-profile-update.component';

describe('AdminProfileUpdateComponent', () => {
  let component: AdminProfileUpdateComponent;
  let fixture: ComponentFixture<AdminProfileUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProfileUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
