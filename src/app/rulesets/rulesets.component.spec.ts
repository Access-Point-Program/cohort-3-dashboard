import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesetsComponent } from './rulesets.component';

describe('RulesetsComponent', () => {
  let component: RulesetsComponent;
  let fixture: ComponentFixture<RulesetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesetsComponent]
    });
    fixture = TestBed.createComponent(RulesetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
