import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectLoggedIn,
  selectLoggedInUser,
  submitLogout,
} from '@zack-live-stream/frontend/our-circle-ngrx-utils';
import { User } from '@zack-live-stream/content-post-utils';

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
