import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotChooseComponent } from './slot-choose.component';

describe('SlotChooseComponent', () => {
  let component: SlotChooseComponent;
  let fixture: ComponentFixture<SlotChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
