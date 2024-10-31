import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofilenrsComponent } from './myprofilenrs.component';

describe('MyprofilenrsComponent', () => {
  let component: MyprofilenrsComponent;
  let fixture: ComponentFixture<MyprofilenrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyprofilenrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofilenrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
