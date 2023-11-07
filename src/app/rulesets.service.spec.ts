import { TestBed } from '@angular/core/testing';

import { RulesetsService } from './rulesets.service';

describe('RulesetsService', () => {
  let service: RulesetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
