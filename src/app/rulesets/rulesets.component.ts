import { Component } from "@angular/core";
import { DecimalPipe, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";

interface Ruleset {
  Id?: number;
  name: string;
  creator: string;
  createdOn: Date;
  actionDel: string;
  actionEdit: string;
}

const Rulesets: Ruleset[] = [
  {
    Id: 1,
    name: "Bilbo",
    creator: "Cyclones",
    createdOn: new Date("10/25/2023"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 2,
    name: "Carol",
    creator: "Cyclones",
    createdOn: new Date("10/25/3023"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 3,
    name: "Ruleset 3",
    creator: "John Doe",
    createdOn: new Date("06/23/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 4,
    name: "Ruleset 4",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 5,
    name: "Ruleset 5",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 6,
    name: "Ruleset 6",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 7,
    name: "Ruleset 7",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 8,
    name: "Ruleset 8",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 9,
    name: "Ruleset 9",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 10,
    name: "Ruleset 10",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 11,
    name: "Ruleset 11",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 12,
    name: "Ruleset 12",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
];

@Component({
  selector: 'app-rulesets',
  templateUrl: './rulesets.component.html',
  styleUrls: ['./rulesets.component.css']
})
export class RulesetsComponent {
  page = 1;
  pageSize = 7;
  collectionSize = Rulesets.length;
  rulesets: Ruleset[] = Rulesets; 

  constructor() {
    this.refreshRulesets();
  }

  refreshRulesets() {
    this.rulesets = Rulesets.map((ruleset, i) => ({ id: i + 1, ...ruleset })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  delete() {
    // Send a delete request to api
  }
  edit() {
    // Redirect to the layouts page
  }
}
