import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeOrderComponent } from './before-order.component';

describe('BeforeOrderComponent', () => {
  let component: BeforeOrderComponent;
  let fixture: ComponentFixture<BeforeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
