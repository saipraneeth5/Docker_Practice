import { TestBed } from '@angular/core/testing';

import { PatientServeService } from './patient-serve.service';

describe('PatientServeService', () => {
  let service: PatientServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
