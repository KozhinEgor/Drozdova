import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZakupkaComponent } from './add-zakupka.component';

describe('AddZakupkaComponent', () => {
  let component: AddZakupkaComponent;
  let fixture: ComponentFixture<AddZakupkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZakupkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZakupkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
