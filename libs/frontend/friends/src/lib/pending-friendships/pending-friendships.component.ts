import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectPendingRequests } from '@zack-live-stream/frontend/our-circle-ngrx-utils';

@Component({
  selector: 'our-circle-pending-friendships',
  templateUrl: './pending-friendships.component.html',
  styleUrls: ['./pending-friendships.component.scss'],
})
export class PendingFriendshipsComponent {
  pendingFriends$ = this.store.pipe(select(selectPendingRequests));

  constructor(private store: Store) {}
}
