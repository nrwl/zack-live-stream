import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorTestBedComponent } from './paginator-test-bed.component';

describe('PaginatorTestBedComponent', () => {
  let component: PaginatorTestBedComponent;
  let fixture: ComponentFixture<PaginatorTestBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorTestBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorTestBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
