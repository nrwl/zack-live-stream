import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContentPostComponent } from './create-content-post.component';

describe('CreateContentPostComponent', () => {
  let component: CreateContentPostComponent;
  let fixture: ComponentFixture<CreateContentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
