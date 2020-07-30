import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPostListComponent } from './content-post-list.component';

describe('ContentPostListComponent', () => {
  let component: ContentPostListComponent;
  let fixture: ComponentFixture<ContentPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
