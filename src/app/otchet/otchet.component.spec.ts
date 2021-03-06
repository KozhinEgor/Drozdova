import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtchetComponent } from './otchet.component';

describe('OtchetComponent', () => {
  let component: OtchetComponent;
  let fixture: ComponentFixture<OtchetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtchetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtchetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
