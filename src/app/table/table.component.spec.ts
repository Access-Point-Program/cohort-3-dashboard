import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsTableComponent } from './table.component';

describe('LayoutsTableComponent', () => {
  let component: LayoutsTableComponent;
  let fixture: ComponentFixture<LayoutsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutsTableComponent]
    });
    fixture = TestBed.createComponent(LayoutsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
