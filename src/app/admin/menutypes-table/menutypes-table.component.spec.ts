import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutypesTableComponent } from './menutypes-table.component';

describe('MenutypesTableComponent', () => {
  let component: MenutypesTableComponent;
  let fixture: ComponentFixture<MenutypesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutypesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
