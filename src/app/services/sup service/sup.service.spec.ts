import { TestBed } from '@angular/core/testing';

import { SupService } from './sup.service';

describe('SupService', () => {
  let service: SupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
