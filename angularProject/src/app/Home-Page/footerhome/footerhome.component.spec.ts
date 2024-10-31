import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterhomeComponent } from './footerhome.component';

describe('FooterhomeComponent', () => {
  let component: FooterhomeComponent;
  let fixture: ComponentFixture<FooterhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
