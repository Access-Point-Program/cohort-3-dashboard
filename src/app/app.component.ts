// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Dashboard';
// }

import { Component, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = 'layouts';
  title = 'Demo';
  data = {}  as any;
  constructor(private http: HttpClient) {
    http.get('resource').subscribe(data => this.data = data);
  }

  @Output() active2: string = 'layouts';
  changeActive(a: string): void {
    this.active2 = a;
  }
}