import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofilepntComponent } from './myprofilepnt.component';

describe('MyprofilepntComponent', () => {
  let component: MyprofilepntComponent;
  let fixture: ComponentFixture<MyprofilepntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyprofilepntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofilepntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
