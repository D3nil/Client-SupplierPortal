import { TestBed, inject } from '@angular/core/testing';

import { ServiceUploadFilesService } from './-service-upload-files.service';

describe('ServiceUploadFilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUploadFilesService]
    });
  });

  it('should be created', inject([ServiceUploadFilesService], (service: ServiceUploadFilesService) => {
    expect(service).toBeTruthy();
  }));
});
