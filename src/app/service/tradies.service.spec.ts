import { TestBed } from '@angular/core/testing';

import { TradiesService } from './tradies.service';

describe('TradiesService', () => {
  let service: TradiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
