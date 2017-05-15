import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemFormComponent } from './menuitem-form.component';

describe('MenuitemFormComponent', () => {
  let component: MenuitemFormComponent;
  let fixture: ComponentFixture<MenuitemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
