import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@zack-live-stream/auth-utils';
import { selectFindableFriends } from '@zack-live-stream/frontend/our-circle-ngrx-utils';

@Component({
  selector: 'our-circle-find-friends',
  templateUrl: './find-friends.component.html',
  styleUrls: ['./find-friends.component.scss'],
})
export class FindFriendsComponent {
  findableFriends$: Observable<User[]> = this.store.pipe(
    select(selectFindableFriends)
  );

  constructor(private store: Store) {}
}
