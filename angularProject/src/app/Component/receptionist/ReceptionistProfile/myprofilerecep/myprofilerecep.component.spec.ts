import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofilerecepComponent } from './myprofilerecep.component';

describe('MyprofilerecepComponent', () => {
  let component: MyprofilerecepComponent;
  let fixture: ComponentFixture<MyprofilerecepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyprofilerecepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofilerecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
