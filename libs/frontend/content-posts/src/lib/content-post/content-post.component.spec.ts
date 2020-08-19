import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPostComponent } from './content-post.component';

describe('ContentPostComponent', () => {
  let component: ContentPostComponent;
  let fixture: ComponentFixture<ContentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
