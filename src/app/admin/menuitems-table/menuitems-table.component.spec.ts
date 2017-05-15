import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemsTableComponent } from './menuitems-table.component';

describe('MenuitemsTableComponent', () => {
  let component: MenuitemsTableComponent;
  let fixture: ComponentFixture<MenuitemsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
