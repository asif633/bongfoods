import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucategoryFormComponent } from './menucategory-form.component';

describe('MenucategoryFormComponent', () => {
  let component: MenucategoryFormComponent;
  let fixture: ComponentFixture<MenucategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
