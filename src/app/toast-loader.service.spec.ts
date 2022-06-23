import { TestBed } from '@angular/core/testing';

import { ToastLoaderService } from './toast-loader.service';

describe('ToastLoaderService', () => {
  let service: ToastLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
