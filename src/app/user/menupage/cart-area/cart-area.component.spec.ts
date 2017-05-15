import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAreaComponent } from './cart-area.component';

describe('CartAreaComponent', () => {
  let component: CartAreaComponent;
  let fixture: ComponentFixture<CartAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
