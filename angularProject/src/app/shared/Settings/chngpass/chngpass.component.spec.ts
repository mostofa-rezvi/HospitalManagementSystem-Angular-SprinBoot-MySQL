import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngpassComponent } from './chngpass.component';

describe('ChngpassComponent', () => {
  let component: ChngpassComponent;
  let fixture: ComponentFixture<ChngpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChngpassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChngpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
