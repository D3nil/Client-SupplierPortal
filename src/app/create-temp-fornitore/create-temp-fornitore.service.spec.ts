import { TestBed, inject } from '@angular/core/testing';

import { CreateTempFornitoreService } from './create-temp-fornitore.service';

describe('CreateTempFornitoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTempFornitoreService]
    });
  });

  it('should be created', inject([CreateTempFornitoreService], (service: CreateTempFornitoreService) => {
    expect(service).toBeTruthy();
  }));
});
