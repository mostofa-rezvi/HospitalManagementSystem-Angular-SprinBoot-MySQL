import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenthomeComponent } from './appointmenthome.component';

describe('AppointmenthomeComponent', () => {
  let component: AppointmenthomeComponent;
  let fixture: ComponentFixture<AppointmenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmenthomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
