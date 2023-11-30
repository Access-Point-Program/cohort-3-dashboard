// Importing necessary Angular testing modules and the service to be tested
import { TestBed } from '@angular/core/testing';

import { LayoutsService } from './layouts.service';

describe('LayoutsService', () => {
  let service: LayoutsService;

    // Setting up the testing module and injecting the service
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutsService);
  });
  // Testing whether the service is successfully created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
