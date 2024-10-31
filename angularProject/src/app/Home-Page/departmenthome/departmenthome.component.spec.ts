import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenthomeComponent } from './departmenthome.component';

describe('DepartmenthomeComponent', () => {
  let component: DepartmenthomeComponent;
  let fixture: ComponentFixture<DepartmenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmenthomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
