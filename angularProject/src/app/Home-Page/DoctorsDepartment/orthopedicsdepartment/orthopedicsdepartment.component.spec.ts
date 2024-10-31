import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopedicsdepartmentComponent } from './orthopedicsdepartment.component';

describe('OrthopedicsdepartmentComponent', () => {
  let component: OrthopedicsdepartmentComponent;
  let fixture: ComponentFixture<OrthopedicsdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrthopedicsdepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrthopedicsdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
