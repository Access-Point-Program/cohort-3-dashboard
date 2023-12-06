// Importing necessary modules for testing
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RulesetsComponent } from "./rulesets/rulesets.component";

// Test suite for the AppComponent
describe("AppComponent", () => {
  // Configuration before each test
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RulesetsComponent
      ],
    })
  );
  // Test case: should create the app
  it("should create the app", () => {
    // Creating a fixture for the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    // Accessing the component instance
    const app = fixture.componentInstance;
    // Asserting that the component instance is truthy (exists)
    expect(app).toBeTruthy();
  });

  // Test case: should have 'Dashboard' as the title
  it(`should have as title 'Dashboard'`, () => {
    // Creating a fixture for the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    // Accessing the component instance
    const app = fixture.componentInstance;
    // Asserting that the title property is equal to 'Dashboard'
    expect(app.title).toEqual("Dashboard");
  });

  // Test case: should render the title in the HTML template
  it("should render title", () => {
    // Creating a fixture for the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    // Triggering change detection to update the rendered HTML
    fixture.detectChanges();
    // Accessing the compiled HTML element
    const compiled = fixture.nativeElement as HTMLElement;
    // Asserting that the rendered HTML contains the specified text
    expect(compiled.querySelector(".content span")?.textContent).toContain(
      "Dashboard app is running!"
    );
  });
});
