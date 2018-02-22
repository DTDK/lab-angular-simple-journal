import { TestBed, inject } from '@angular/core/testing';

import { JournalServicesService } from './journal-services.service';

describe('JournalServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalServicesService]
    });
  });

  it('should be created', inject([JournalServicesService], (service: JournalServicesService) => {
    expect(service).toBeTruthy();
  }));
});
