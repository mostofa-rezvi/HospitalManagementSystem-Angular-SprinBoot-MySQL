import { TestBed } from '@angular/core/testing';

import { AppointmenthomeService } from './appointmenthome.service';

describe('AppointmenthomeService', () => {
  let service: AppointmenthomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmenthomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
