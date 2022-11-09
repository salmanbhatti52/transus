import { TestBed } from '@angular/core/testing';

import { ImgsrService } from './imgsr.service';

describe('ImgsrService', () => {
  let service: ImgsrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgsrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
