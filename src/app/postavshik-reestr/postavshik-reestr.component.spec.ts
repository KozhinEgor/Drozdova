import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostavshikReestrComponent } from './postavshik-reestr.component';

describe('PostavshikReestrComponent', () => {
  let component: PostavshikReestrComponent;
  let fixture: ComponentFixture<PostavshikReestrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostavshikReestrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostavshikReestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
