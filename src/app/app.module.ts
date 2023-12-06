// Importing necessary Angular modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// Importing components and routing module
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LayoutsTableComponent } from "./table/table.component";
import { RulesetsComponent } from "./rulesets/rulesets.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    // Declaring components used in the module
    AppComponent,
    SidebarComponent,
    LayoutsTableComponent,
    RulesetsComponent,
  ],
  imports: [
    // Importing Angular modules for functionality
    BrowserModule,
    HttpClientModule,
    NgbModule, // ng-bootstrap module for UI components
    AppRoutingModule, // Custom routing module
  ],
  providers: [], // Service providers can be added here
  bootstrap: [AppComponent], // The root component to be bootstrapped
})
export class AppModule {}
