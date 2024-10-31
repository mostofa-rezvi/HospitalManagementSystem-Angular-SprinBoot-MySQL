import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetypeComponent } from './leavetype.component';

describe('LeavetypeComponent', () => {
  let component: LeavetypeComponent;
  let fixture: ComponentFixture<LeavetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeavetypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
