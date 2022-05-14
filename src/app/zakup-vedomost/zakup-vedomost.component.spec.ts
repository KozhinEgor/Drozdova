import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakupVedomostComponent } from './zakup-vedomost.component';

describe('ZakupVedomostComponent', () => {
  let component: ZakupVedomostComponent;
  let fixture: ComponentFixture<ZakupVedomostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakupVedomostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakupVedomostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
