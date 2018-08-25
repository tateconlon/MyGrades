import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssnSliderComponent } from './assn-slider.component';

describe('AssnSliderComponent', () => {
  let component: AssnSliderComponent;
  let fixture: ComponentFixture<AssnSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssnSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssnSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
