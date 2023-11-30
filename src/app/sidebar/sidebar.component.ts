// Importing the necessary module for Angular component
import { Component } from '@angular/core';

// Component decorator specifying metadata for the SidebarComponent
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    // Property to track the active section in the sidebar
  active: string = 'd';

    // Method to update the active section when a new section is clicked
  change(s:string){
    this.active = s;
  }
}