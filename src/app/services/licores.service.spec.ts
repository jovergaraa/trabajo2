import { TestBed } from '@angular/core/testing';

import { LicoresService } from './licores.service';

describe('LicoresService', () => {
  let service: LicoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
