import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

interface Layout {
	name: string;
	creator: string;
	createdOn: Date;
	actionDel: string;
  actionEdit: string;
}

const Layouts: Layout[] = [
	{
		name: 'Layout 1',
		creator: 'John Doe',
		createdOn: new Date('06/21/2005'),
    actionDel: '/delete',
    actionEdit: '/edit',
	},
  {
		name: 'Layout 2',
		creator: 'John Doe',
		createdOn: new Date('06/22/2005'),
    actionDel: '/delete',
    actionEdit: '/edit',
	},
  {
		name: 'Layout 3',
		creator: 'John Doe',
		createdOn: new Date('06/23/2005'),
    actionDel: '/delete',
    actionEdit: '/edit',
	},
  {
		name: 'Layout 4',
		creator: 'John Doe',
		createdOn: new Date('06/24/2005'),
    actionDel: '/delete',
    actionEdit: '/edit',
	},

];


@Component({
  selector: 'app-layouts-table',
  templateUrl: './layouts-table.component.html',
  styleUrls: ['./layouts-table.component.css']
})
export class LayoutsTableComponent {
  page = 1;
	pageSize = 3;
	collectionSize = Layouts.length;
  layouts: Layout[] = Layouts;

	constructor() {
		this.refreshCountries();
	}

	refreshCountries() {
		this.layouts = Layouts.map((layout, i) => ({ id: i + 1, ...layout })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
	delete() {
		// Send a delete request to api
	}
	edit() {
		// Redirect to the layouts page
	}
}

