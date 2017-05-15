import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucategoriesTableComponent } from './menucategories-table.component';

describe('MenucategoriesTableComponent', () => {
  let component: MenucategoriesTableComponent;
  let fixture: ComponentFixture<MenucategoriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucategoriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucategoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
