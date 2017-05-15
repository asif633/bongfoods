import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutypeFormComponent } from './menutype-form.component';

describe('MenutypeFormComponent', () => {
  let component: MenutypeFormComponent;
  let fixture: ComponentFixture<MenutypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
