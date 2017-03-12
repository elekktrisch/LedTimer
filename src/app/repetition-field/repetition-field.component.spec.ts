import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitionFieldComponent } from './repetition-field.component';

describe('RepetitionFieldComponent', () => {
  let component: RepetitionFieldComponent;
  let fixture: ComponentFixture<RepetitionFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepetitionFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetitionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
