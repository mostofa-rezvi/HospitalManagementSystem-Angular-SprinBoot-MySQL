import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiacdepartmentComponent } from './cardiacdepartment.component';

describe('CardiacdepartmentComponent', () => {
  let component: CardiacdepartmentComponent;
  let fixture: ComponentFixture<CardiacdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardiacdepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardiacdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
