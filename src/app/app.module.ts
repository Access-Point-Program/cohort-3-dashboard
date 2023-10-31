import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutsTableComponent} from './table/table.component';
import { RulesetsComponent } from './rulesets/rulesets.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
