// Importing necessary modules for Angular routing
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components for route navigation
import { LayoutsTableComponent } from './table/table.component';
import { RulesetsComponent } from './rulesets/rulesets.component';

// Array of route configurations
const appRoute: Routes = [
  {path:'layouts', component: LayoutsTableComponent},
  {path:'rulesets', component: RulesetsComponent},
  {path:'', redirectTo: 'layouts',pathMatch: 'full'},
  {path:'**', redirectTo:'layouts',pathMatch: 'full'},
];

// NgModule decorator for configuring the Angular module with routing
@NgModule({
    // Importing RouterModule with the configured routes
  imports: [RouterModule.forRoot(appRoute)],
    // Exporting RouterModule for use in the application
  exports: [RouterModule]
})
export class AppRoutingModule { }
