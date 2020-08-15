import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFriendshipsComponent } from './pending-friendships.component';

describe('PendingFriendshipsComponent', () => {
  let component: PendingFriendshipsComponent;
  let fixture: ComponentFixture<PendingFriendshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingFriendshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingFriendshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
