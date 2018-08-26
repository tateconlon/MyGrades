import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssnDialogueComponent } from './assn-dialogue.component';

describe('AssnDialogueComponent', () => {
  let component: AssnDialogueComponent;
  let fixture: ComponentFixture<AssnDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssnDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssnDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
