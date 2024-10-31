import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddepartmentComponent } from './childdepartment.component';

describe('ChilddepartmentComponent', () => {
  let component: ChilddepartmentComponent;
  let fixture: ComponentFixture<ChilddepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChilddepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilddepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
