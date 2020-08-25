import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTestBedComponent } from './pagination-test-bed.component';

describe('PaginationTestBedComponent', () => {
  let component: PaginationTestBedComponent;
  let fixture: ComponentFixture<PaginationTestBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationTestBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationTestBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
