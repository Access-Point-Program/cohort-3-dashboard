import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutsTableComponent} from './table/table.component';
import { RulesetsComponent } from './rulesets/rulesets.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutsTableComponent,
    RulesetsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'layouts', component: LayoutsTableComponent},
      {path:'rulesets', component: RulesetsComponent},
      {path:'', redirectTo: 'layouts',pathMatch: 'full'},
      {path:'**', redirectTo:'layouts',pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
