import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakazReestrComponent } from './zakaz-reestr.component';

describe('ZakazReestrComponent', () => {
  let component: ZakazReestrComponent;
  let fixture: ComponentFixture<ZakazReestrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakazReestrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakazReestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
