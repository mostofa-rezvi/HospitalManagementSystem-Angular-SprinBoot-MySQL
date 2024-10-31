import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarysettingsComponent } from './salarysettings.component';

describe('SalarysettingsComponent', () => {
  let component: SalarysettingsComponent;
  let fixture: ComponentFixture<SalarysettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalarysettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarysettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
