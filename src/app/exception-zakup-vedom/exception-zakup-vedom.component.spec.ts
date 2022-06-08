import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionZakupVedomComponent } from './exception-zakup-vedom.component';

describe('ExceptionZakupVedomComponent', () => {
  let component: ExceptionZakupVedomComponent;
  let fixture: ComponentFixture<ExceptionZakupVedomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionZakupVedomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionZakupVedomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
