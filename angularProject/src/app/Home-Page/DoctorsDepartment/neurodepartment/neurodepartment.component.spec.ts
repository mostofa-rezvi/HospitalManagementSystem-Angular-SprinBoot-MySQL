import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurodepartmentComponent } from './neurodepartment.component';

describe('NeurodepartmentComponent', () => {
  let component: NeurodepartmentComponent;
  let fixture: ComponentFixture<NeurodepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeurodepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeurodepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
