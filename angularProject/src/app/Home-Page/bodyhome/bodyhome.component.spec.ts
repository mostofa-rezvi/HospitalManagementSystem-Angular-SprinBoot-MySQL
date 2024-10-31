import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyhomeComponent } from './bodyhome.component';

describe('BodyhomeComponent', () => {
  let component: BodyhomeComponent;
  let fixture: ComponentFixture<BodyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
