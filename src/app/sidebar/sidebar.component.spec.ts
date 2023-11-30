// Importing necessary modules for Angular unit testing
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested
import { SidebarComponent } from './sidebar.component';

// Test suite for the SidebarComponent
describe('SidebarComponent', () => {
  // Variables to hold the component instance and the testing fixture
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  // Setup function to be executed before each test
  beforeEach(() => {
    // Configuring the testing module with the SidebarComponent
    TestBed.configureTestingModule({
      declarations: [SidebarComponent]
    });

    // Creating a component fixture and getting the component instance
    fixture = TestBed.createComponent(SidebarComponent);
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
