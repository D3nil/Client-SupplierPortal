import { TestBed, inject } from '@angular/core/testing';

import { ServiceCreateSupplierService } from './-service-create-supplier.service';

describe('ServiceCreateSupplierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCreateSupplierService]
    });
  });

  it('should be created', inject([ServiceCreateSupplierService], (service: ServiceCreateSupplierService) => {
    expect(service).toBeTruthy();
  }));
});
