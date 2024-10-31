import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraldepartmentComponent } from './generaldepartment.component';

describe('GeneraldepartmentComponent', () => {
  let component: GeneraldepartmentComponent;
  let fixture: ComponentFixture<GeneraldepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneraldepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneraldepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
