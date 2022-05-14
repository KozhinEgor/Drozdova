import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakupComponent } from './zakup.component';

describe('ZakupComponent', () => {
  let component: ZakupComponent;
  let fixture: ComponentFixture<ZakupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
