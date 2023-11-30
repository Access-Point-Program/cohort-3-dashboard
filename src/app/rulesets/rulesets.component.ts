// Importing necessary Angular modules and dependencies
import { Component, OnInit } from "@angular/core";
import { DecimalPipe, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";
// Importing data model and service for rulesets
import { RulesetData } from "../Ruleset";
import { RulesetsService } from "../rulesets.service";



// Component decorator specifying metadata for the RulesetsComponent
@Component({
  selector: 'app-rulesets',
  templateUrl: './rulesets.component.html',
  styleUrls: ['./rulesets.component.css']
})

export class RulesetsComponent implements OnInit{
   // Array to hold ruleset data
  rulesets: RulesetData[] = [];
  // Pagination properties
  page = 1;
  pageSize = 7;
  collectionSize = 9;
  rulesetsData?: RulesetData[];

  
 // Constructor injecting the RulesetsService
  constructor( private rulesetService: RulesetsService) {
        // Initializing the component by calling the refreshRulesets method
    this.refreshRulesets();
  }

  ngOnInit(){
    // Calling the getRulesets method during component initialization
    this.getRulesets();
  }

    // Method to refresh the displayed rulesets based on pagination
  refreshRulesets() {
        // Slicing the rulesets array based on pagination parameters
    this.rulesetsData = this.rulesets.map((ruleset, i) => ({ ...ruleset })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }


  // Method to delete a ruleset
  delete(ruleset: number): void {
    // Send a delete request to api
  this.rulesetService.deleteRuleset(ruleset).subscribe((el) => this.getRulesets()); 
  
  }
  // Method to navigate to the edit page for a specific ruleset
  edit(rulesetId: number) {
    let URL: string;
    // Constructing the edit URL based on the rulesetId
      URL = `http://localhost:9012/rulesets/${rulesetId}`;
    // Redirecting to the edit URL
    window.location.href = URL;
  }
  
    // Method to retrieve ruleset data from the service
  getRulesets(){
    this.rulesetService.getRulesets().subscribe((data) => {
       // Updating the rulesets array with the retrieved data
      this.rulesets = data; 
      // Refreshing the displayed rulesets and updating the collectionSize for pagination
      this.refreshRulesets(); 
      this.collectionSize = this.rulesets.length});
  }



}
