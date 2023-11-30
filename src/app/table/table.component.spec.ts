// Importing necessary modules for Angular unit testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importing the component to be tested
import { LayoutsTableComponent } from './table.component';

// Test suite for the LayoutsTableComponent
describe('LayoutsTableComponent', () => {
    // Variables to hold the component instance and the testing fixture
  let component: LayoutsTableComponent;
  let fixture: ComponentFixture<LayoutsTableComponent>;

    // Setup function to be executed before each test
  beforeEach(() => {
        // Configuring the testing module with the LayoutsTableComponent
    TestBed.configureTestingModule({
      declarations: [LayoutsTableComponent]
    });

        // Creating a component fixture and getting the component instance
    fixture = TestBed.createComponent(LayoutsTableComponent);
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
