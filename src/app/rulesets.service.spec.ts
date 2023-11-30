// Importing necessary modules for Angular testing
import { TestBed } from '@angular/core/testing';
// Import the service to be tested
import { RulesetsService } from './rulesets.service';

// Describe the test suite for the RulesetsService
describe('RulesetsService', () => {
    // Declare a variable to hold an instance of the RulesetsService
  let service: RulesetsService;

    // Configure the testing module before each test
  beforeEach(() => {
    TestBed.configureTestingModule({});
        // Inject an instance of the RulesetsService into the testing environment
    service = TestBed.inject(RulesetsService);
  });

    // Test whether the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
