// Importing necessary modules for Angular unit testing
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested
import { RulesetsComponent } from './rulesets.component';

// Test suite for the RulesetsComponent
describe('RulesetsComponent', () => {
  // Variables to hold the component instance and the testing fixture
  let component: RulesetsComponent;
  let fixture: ComponentFixture<RulesetsComponent>;

  // Setup function to be executed before each test
  beforeEach(() => {
    // Configuring the testing module with the RulesetsComponent
    TestBed.configureTestingModule({
      declarations: [RulesetsComponent]
    });

    // Creating a component fixture and getting the component instance
    fixture = TestBed.createComponent(RulesetsComponent);
    component = fixture.componentInstance;

    // Detecting changes in the component (e.g., triggering ngOnInit)
    fixture.detectChanges();
  });

  // Test case: checking if the component is created successfully
  it('should create', () => {
    // Expecting that the component instance is truthy, indicating successful creation
    expect(component).toBeTruthy();
  });
});
