import { Component, OnInit } from "@angular/core";
import { DecimalPipe, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";
import { LayoutData } from "../Layouts";
import { LayoutsService } from "../layouts.service";


@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],

})
export class LayoutsTableComponent implements OnInit{
  layouts: LayoutData[] = [];
  page = 1;
  pageSize = 7;
  collectionSize = 9;
  layoutsData?: LayoutData[];  

  constructor(private layoutService: LayoutsService) {
    this.refreshLayouts();
  }
  

  ngOnInit(){
    this.getLayouts();
  }

  refreshLayouts() {
    this.layoutsData = this.layouts.map((layout, i) => ({ ...layout })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  delete(layout: number): void {
    // Send a delete request to api
  this.layoutService.deleteLayout(layout).subscribe((el) => this.getLayouts()); 
  
  }
  edit(layoutId: number) {
    let URL: string;

    if (window.location.hostname === 'AreWebsiteName.com'){
      URL = `https://Rulesets-website.com/edit/${layoutId}`;
    } else {
      URL = `https://localhost:4200/layouts/${layoutId}`;
    }

    window.location.href = URL;
  }

  getLayouts(){
    this.layoutService.getLayouts().subscribe((data) => {this.layouts = data; this.refreshLayouts(); this.collectionSize = this.layouts.length});
  }

}
