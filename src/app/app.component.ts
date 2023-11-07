

import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  active: string;
  title = 'Dashboard';
  constructor( private router: Router, private activatedRoute: ActivatedRoute) {
    this.active = localStorage.getItem('activeTab') || 'layouts';

    // Subscribe to the router events and updates tab when change happens
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.updateActiveTabFromRoute(event.url);
      }
    });

  }

  //intiliaze the tab based on the route being used
  ngOnInit() {
    this.updateActiveTabFromRoute(this.router.url);
  }

  // Keeps tab activated when restarting page
  changeTab(tabName: string){
    this.active = tabName;
    localStorage.setItem('activeTab', tabName);
  }

  private updateActiveTabFromRoute(route: string) {
    if (route.includes('layouts')){
      this.active = 'layouts';
    } else if (route.includes('rulesets')) {
      this.active = 'rulesets';
    }

  }


 
  
}