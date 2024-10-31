import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilenrsComponent } from './editprofilenrs.component';

describe('EditprofilenrsComponent', () => {
  let component: EditprofilenrsComponent;
  let fixture: ComponentFixture<EditprofilenrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditprofilenrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofilenrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
