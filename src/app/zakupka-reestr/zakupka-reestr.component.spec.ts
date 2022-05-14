import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakupkaReestrComponent } from './zakupka-reestr.component';

describe('ZakupkaReestrComponent', () => {
  let component: ZakupkaReestrComponent;
  let fixture: ComponentFixture<ZakupkaReestrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakupkaReestrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakupkaReestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
