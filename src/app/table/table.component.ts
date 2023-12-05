// Importing necessary modules and dependencies for the Angular component
import { Component, OnInit } from "@angular/core";
import { DecimalPipe, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";
// Importing data model and service for layouts
import { LayoutData } from "../Layouts";
import { LayoutsService } from "../layouts.service";

// Component decorator specifying metadata for the LayoutsTableComponent
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],

})
export class LayoutsTableComponent implements OnInit{
    // Array to store layout data
  layouts: LayoutData[] = [];

    // Pagination properties
  page = 1;
  pageSize = 7;
  collectionSize = 9;
  layoutsData?: LayoutData[];
  showConfirmation: boolean = false;
  itemIdToDelete: number | undefined;

    // Constructor with dependency injection for LayoutsService
  constructor(private layoutService: LayoutsService) {
        // Initializing and refreshing layouts
    this.refreshLayouts();
  }
  

  ngOnInit(){
        // Fetching layouts on component initialization
    this.getLayouts();
  }

  // Method to refresh layout data based on pagination
  refreshLayouts() {
    this.layoutsData = this.layouts.map((layout, i) => ({ ...layout })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  confirmDelete(itemId: number): void {
    this.itemIdToDelete = itemId;
    this.showConfirmation = true;
  }

  cancelDelete(): void {
    this.showConfirmation = false;
    this.itemIdToDelete = undefined;
  }

    // Method to delete a layout

    delete(): void {
      if (this.itemIdToDelete) {
        // Send a delete request to api
      this.layoutService.deleteLayout(this.itemIdToDelete).subscribe(() => {
    
        this.showConfirmation = false;
        this.itemIdToDelete = undefined;
        this.getLayouts();
      },
      (error) => {
        console.error(error);
    
        this.showConfirmation = false;
        this.itemIdToDelete = undefined;
      }

      ); 
    }
    
    }
    // Method to edit a layout and navigate to its URL
  edit(layoutId: number) {
    let URL: string;

        // Constructing the URL for the layout based on its ID
      URL = `http://localhost:9003/layout/${layoutId}`;

      // Redirecting to the specified URL
    window.location.href = URL;
  }
  // Method to fetch layouts from the service
  getLayouts(){
        // Subscribing to the layout service to get layout data
    this.layoutService.getLayouts().subscribe((data) => {
            // Updating the layouts array and refreshing layout data
      this.layouts = data;
       this.refreshLayouts();
             // Updating the total collection size for pagination
       this.collectionSize = this.layouts.length});
  }

}
