import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotContainerComponent } from './timeslot-container.component';

describe('TimeslotContainerComponent', () => {
  let component: TimeslotContainerComponent;
  let fixture: ComponentFixture<TimeslotContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslotContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
