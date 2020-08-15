import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectIncomingRequests } from '@zack-live-stream/frontend/our-circle-ngrx-utils';
import { approveFriendship } from '@zack-live-stream/frontend/our-circle-ngrx-utils';

@Component({
  selector: 'our-circle-incoming-requests',
  templateUrl: './incoming-requests.component.html',
  styleUrls: ['./incoming-requests.component.scss'],
})
export class IncomingRequestsComponent {
  incomingRequests$ = this.store.pipe(select(selectIncomingRequests));

  constructor(private store: Store) {}

  approveFriendship(id: string) {
    this.store.dispatch(approveFriendship({ userId: id }));
  }
}
