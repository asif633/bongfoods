import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAreaContainerComponent } from './city-area-container.component';

describe('CityAreaContainerComponent', () => {
  let component: CityAreaContainerComponent;
  let fixture: ComponentFixture<CityAreaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAreaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAreaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
