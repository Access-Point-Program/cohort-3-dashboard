import { Component } from "@angular/core";
import { DecimalPipe, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";

interface Layout {
  Id: number;
  name: string;
  creator: string;
  createdOn: Date;
  actionDel: string;
  actionEdit: string;
}

const Layouts: Layout[] = [
  {
    Id: 1,
    name: "Layout 1",
    creator: "Nick Jansen",
    createdOn: new Date("02/25/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 2,
    name: "Layout 2",
    creator: "John Doe",
    createdOn: new Date("06/22/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 3,
    name: "Layout 3",
    creator: "John Doe",
    createdOn: new Date("06/23/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 4,
    name: "Layout 4",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 5,
    name: "Layout 5",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 6,
    name: "Layout 6",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 7,
    name: "Layout 7",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 8,
    name: "Layout 8",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 9,
    name: "Layout 9",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 10,
    name: "Layout 10",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 11,
    name: "Layout 11",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
  {
    Id: 12,
    name: "Layout 12",
    creator: "John Doe",
    createdOn: new Date("06/24/2005"),
    actionDel: "/delete",
    actionEdit: "/edit",
  },
];

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class LayoutsTableComponent {
  page = 1;
  pageSize = 7;
  collectionSize = Layouts.length;
  layouts: Layout[] = Layouts;

  constructor() {
    this.refreshLayouts();
  }

  refreshLayouts() {
    this.layouts = Layouts.map((layout, i) => ({ id: i + 1, ...layout })).slice(
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
