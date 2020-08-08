import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from '@zack-live-stream/auth-utils';
import {
  selectLoggedIn,
  selectLoggedInUser,
  submitLogout,
} from '@zack-live-stream/frontend/our-circle-ngrx-utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'our-circle-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loggedIn$: Observable<
    'not attempted' | 'pending' | 'logged in'
  > = this._store.pipe(select(selectLoggedIn));
  user$: Observable<User> = this._store.pipe(select(selectLoggedInUser));

  constructor(private _store: Store) {}

  logout() {
    this._store.dispatch(submitLogout());
  }
}
