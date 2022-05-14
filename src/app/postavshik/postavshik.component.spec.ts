import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostavshikComponent } from './postavshik.component';

describe('PostavshikComponent', () => {
  let component: PostavshikComponent;
  let fixture: ComponentFixture<PostavshikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostavshikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostavshikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
