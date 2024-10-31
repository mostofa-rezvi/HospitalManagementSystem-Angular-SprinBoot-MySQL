import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilerecepComponent } from './editprofilerecep.component';

describe('EditprofilerecepComponent', () => {
  let component: EditprofilerecepComponent;
  let fixture: ComponentFixture<EditprofilerecepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditprofilerecepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofilerecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
