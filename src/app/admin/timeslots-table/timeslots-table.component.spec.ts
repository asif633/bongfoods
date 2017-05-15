import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotsTableComponent } from './timeslots-table.component';

describe('TimeslotsTableComponent', () => {
  let component: TimeslotsTableComponent;
  let fixture: ComponentFixture<TimeslotsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslotsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslotsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
