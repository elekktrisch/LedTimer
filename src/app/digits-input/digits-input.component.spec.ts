import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitsInputComponent } from './digits-input.component';

describe('DigitsInputComponent', () => {
  let component: DigitsInputComponent;
  let fixture: ComponentFixture<DigitsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
