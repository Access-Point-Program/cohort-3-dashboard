// Importing necessary modules for Angular unit testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Importing the component to be tested
import { LayoutsTableComponent } from './table.component';
import{ of } from 'rxjs';
import { LayoutsService } from '../layouts.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

describe('LayoutComponent', () => {
  let component: LayoutsTableComponent;
  let fixture: ComponentFixture<LayoutsTableComponent>;
  let layoutsService: Partial<LayoutsService>;


  beforeEach(async () => {
    layoutsService = {
      getLayouts: () => of([]),
      deleteLayout: (id: number) => of([]),
    };


    await TestBed.configureTestingModule({
      declarations: [LayoutsTableComponent], 
      providers: [
        {provide: LayoutsService, useValue: layoutsService},
      ],
      imports: [HttpClientTestingModule, HttpClientModule, NgbPaginationModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Creates component', () => {
    expect(component).toBeTruthy();
  });

  fit('Should call getLayout when started', () => {
    spyOn(component, 'getLayouts');
    component.ngOnInit();
    expect(component.getLayouts).toHaveBeenCalled();
  });

  fit('Refresh layout when page is changed', () => {
    const layouts = [
      { id: 1, name: 'Layout 1', creator: 'Frankie', creationDate: new Date()},
      { id: 2, name: 'Layout 2', creator: 'Tyesha', creationDate: new Date()},
    ];

    component.layouts = layouts;
    component.page = 2;
    component.pageSize = 1;

    component.refreshLayouts();
    expect(component.layoutsData).toEqual([layouts[1]]);

  });

  fit('Comfimation box is shown when trash icon is clicked', () => {
    const itemId = 1;
    
    component.confirmDelete(itemId);
    expect(component.showConfirmation).toBe(true);

  });

  fit('Deleting a layouts calls it with the id', () => {
    const itemId = 1;
      spyOn(component['layoutService'], 'deleteLayout').and.callThrough();
      
      component.itemIdToDelete = itemId;
      component.delete();

      expect(component['layoutService'].deleteLayout).toHaveBeenCalledWith(itemId);
  });

  fit('Cancel delete gets rid of confirmation box' , () => {
    component.cancelDelete();
    expect(component.showConfirmation).toBe(false);
  });

  fit('Should retrieve data from service', () => {
    const layouts = [
      { id: 1, name: 'Layout 1', creator: 'Frankie', creationDate: new Date()},
      { id: 2, name: 'Layout 2', creator: 'Tyesha', creationDate: new Date()},
    ];
    spyOn(component['layoutService'], 'getLayouts').and.returnValue(of(layouts));
    component.getLayouts();
    expect(component.layouts).toEqual(layouts);
  });

});


