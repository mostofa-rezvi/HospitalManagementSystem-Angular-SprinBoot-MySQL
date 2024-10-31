import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorshomeComponent } from './doctorshome.component';

describe('DoctorshomeComponent', () => {
  let component: DoctorshomeComponent;
  let fixture: ComponentFixture<DoctorshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorshomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
