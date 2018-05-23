import { TestBed, inject } from '@angular/core/testing';

import { TempFornitoreService } from './temp-fornitore.service';

describe('TempFornitoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempFornitoreService]
    });
  });

  it('should be created', inject([TempFornitoreService], (service: TempFornitoreService) => {
    expect(service).toBeTruthy();
  }));
});
