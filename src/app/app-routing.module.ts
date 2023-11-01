import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsTableComponent } from './table/table.component';
import { RulesetsComponent } from './rulesets/rulesets.component';

const appRoute: Routes = [
  {path:'layouts', component: LayoutsTableComponent},
  {path:'rulesets', component: RulesetsComponent},
  {path:'', redirectTo: 'layouts',pathMatch: 'full'},
  {path:'**', redirectTo:'layouts',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
