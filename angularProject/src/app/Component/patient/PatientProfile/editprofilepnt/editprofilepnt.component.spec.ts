import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilepntComponent } from './editprofilepnt.component';

describe('EditprofilepntComponent', () => {
  let component: EditprofilepntComponent;
  let fixture: ComponentFixture<EditprofilepntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditprofilepntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofilepntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
