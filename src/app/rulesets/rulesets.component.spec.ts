// Importing necessary modules for Angular unit testing
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpClientModule } from "@angular/common/http";


// Importing the component to be tested
import { RulesetsComponent } from "./rulesets.component";
import { of } from 'rxjs';
import { RulesetsService } from "../rulesets.service";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";


  describe('RulesetComponent', () => {
    let component: RulesetsComponent;
    let fixture: ComponentFixture<RulesetsComponent>;
    let rulesetService: Partial<RulesetsService>;


    beforeEach(async () => {
      rulesetService = {
        getRulesets: () => of([]),
        deleteRuleset: (id: number) => of({}),
      };


      await TestBed.configureTestingModule({
        declarations: [RulesetsComponent],
        providers: [
          { provide: RulesetsService, useValue: rulesetService},
        ],
        imports: [HttpClientTestingModule, HttpClientModule, NgbPaginationModule],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(RulesetsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    fit('Creates component', () => {
      expect(component).toBeTruthy();
    });



    fit('should call getRuleset when started', () => {
      spyOn(component, 'getRulesets');
      component.ngOnInit();
      expect(component.getRulesets).toHaveBeenCalled();
    });



    fit('refresh rulesets when page is changed', () => {
      const rulesets = [
        { id: 1, name: 'Ruleset 1', creator: 'Nick', creationDate: new Date()},
        { id: 2, name: 'Ruleset 2', creator: 'Noah', creationDate: new Date()}
      ];

      component.rulesets = rulesets;
      component.page = 2;
      component.pageSize = 1;

      component.refreshRulesets();

      expect(component.rulesetsData).toEqual([rulesets[1]]);
    });



    fit('shows confirmation box when trashcan is pressed', () => {
      const itemId = 1;

      component.confirmDelete(itemId);
      expect(component.showConfirmation).toBe(true);
    });



    fit('delete a ruleset calls with id', () => {
      const itemId = 1;
      spyOn(component['rulesetService'], 'deleteRuleset').and.callThrough();
      
      component.itemIdToDelete = itemId;
      component.delete();

      expect(component['rulesetService'].deleteRuleset).toHaveBeenCalledWith(itemId);
    });



    fit('cancel delete gets rid of confirmation box', () => {
      component.cancelDelete();

      expect(component.showConfirmation).toBe(false);
    });

    fit('should retrieve data from the service', () => {
      const rulesets = [
        { id: 1, name: 'Ruleset 1', creator: 'Nick', creationDate: new Date()},
        { id: 2, name: 'Ruleset 2', creator: 'Noah', creationDate: new Date()}
      ];

      spyOn(component['rulesetService'], 'getRulesets').and.returnValue(of(rulesets));
      component.getRulesets();

      expect(component.rulesets).toEqual(rulesets);
    });




  });
