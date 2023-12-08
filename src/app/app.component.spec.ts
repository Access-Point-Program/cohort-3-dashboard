// Importing necessary modules for Angular unit testing
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpClientModule } from "@angular/common/http";


// Importing the component to be tested
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Routes, ActivatedRoute } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;


  describe('AppComponent', () => {


      beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [NgbModule, HttpClientTestingModule, HttpClientModule, RouterTestingModule,],
          declarations: [AppComponent, SidebarComponent],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: {
                snapshot: {
                  paramMap: {
                    get: (key: string) => {
                      return 'mocked-parameter-value';
                    },
                  },
                },
              },
            },
          ],
        }).compileComponents();
      });


    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


    fit('Creates component', () => {
      expect(component).toBeTruthy();
    });
    fit(`should have as title 'Dashboard'`, () => {
      // Creating a fixture for the AppComponent
      const fixture = TestBed.createComponent(AppComponent);
      // Accessing the component instance
      const app = fixture.componentInstance;
      // Asserting that the title property is equal to 'Dashboard'
      expect(app.title).toEqual("Dashboard");
    });


    fit('Clicking on rulesets switches to rulesets', async () => {
      await fixture.whenStable();


      fixture.detectChanges();
      const button = fixture.debugElement.nativeElement.querySelector('li[ngbNavItem="rulesets"] button');


      if (button) {
        button.click();
 
        expect(component.active).toBe('rulesets');
      } else {
        fail('Button for "rulesets" tab not found in the DOM.');
      }
    });


    fit('Clicking on layouts switches to layouts', async () => {
      await fixture.whenStable();


      fixture.detectChanges();
      const button = fixture.debugElement.nativeElement.querySelector('li[ngbNavItem="layouts"] button');


      if (button) {
        button.click();
 
        expect(component.active).toBe('layouts');
      } else {
        fail('Button for "layouts" tab not found in the DOM.');
      }
    });

  });

