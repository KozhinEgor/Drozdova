import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakupkaComponent } from './zakupka.component';

describe('ZakupkaComponent', () => {
  let component: ZakupkaComponent;
  let fixture: ComponentFixture<ZakupkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakupkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakupkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
