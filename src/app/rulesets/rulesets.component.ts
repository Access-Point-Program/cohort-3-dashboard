import { Component, OnInit } from "@angular/core";
import { DecimalPipe, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";
import { RulesetData } from "../Ruleset";
import { RulesetsService } from "../rulesets.service";




@Component({
  selector: 'app-rulesets',
  templateUrl: './rulesets.component.html',
  styleUrls: ['./rulesets.component.css']
})
export class RulesetsComponent implements OnInit{
  rulesets: RulesetData[] = [];
  page = 1;
  pageSize = 7;
  collectionSize = 9;
  rulesetsData?: RulesetData[];

  

  constructor( private rulesetService: RulesetsService) {
    this.refreshRulesets();
  }

  ngOnInit(){
    this.getRulesets();
  }

  refreshRulesets() {
    this.rulesetsData = this.rulesets.map((ruleset, i) => ({ ...ruleset })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }


  
  delete(ruleset: number): void {
    // Send a delete request to api
  this.rulesetService.deleteRuleset(ruleset).subscribe((el) => this.getRulesets()); 
  
  }

  edit(rulesetId: number) {
    let URL: string;

    if (window.location.hostname === 'OurWebsiteName.com'){
      URL = `https://Rulesets-website.com/edit/${rulesetId}`;
    } else {
      URL = `https://localhost:4200/rulesets/${rulesetId}`;
    }

    window.location.href = URL;
  }
  
  getRulesets(){
    this.rulesetService.getRulesets().subscribe((data) => {this.rulesets = data; this.refreshRulesets(); this.collectionSize = this.rulesets.length});
  }



}
