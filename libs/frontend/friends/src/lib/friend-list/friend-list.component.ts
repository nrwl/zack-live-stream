import { Component, OnInit } from '@angular/core';
import { User } from '@zack-live-stream/auth-utils';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectFriends } from '@zack-live-stream/frontend/our-circle-ngrx-utils';

@Component({
  selector: 'our-circle-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent {
  friends$: Observable<User[]> = this.store.pipe(select(selectFriends));

  constructor(private store: Store) {}
}
