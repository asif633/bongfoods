import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTypeCategoryItemContainerComponent } from './menu-type-category-item-container.component';

describe('MenuTypeCategoryItemContainerComponent', () => {
  let component: MenuTypeCategoryItemContainerComponent;
  let fixture: ComponentFixture<MenuTypeCategoryItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTypeCategoryItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTypeCategoryItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
