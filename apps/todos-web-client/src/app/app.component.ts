import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from '@zack-live-stream/auth-utils';
import {
  selectLoggedIn,
  selectLoggedInUser,
  submitLogout,
} from '@zack-live-stream/frontend/todos-ngrx-utils';
import { Observable } from 'rxjs';

type ToDo = { task: string; completed: boolean };

@Component({
  selector: 'zack-live-stream-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loggedIn$: Observable<
    'not attempted' | 'pending' | 'logged in'
  > = this._store.pipe(select(selectLoggedIn));
  user$: Observable<User> = this._store.pipe(select(selectLoggedInUser));
  todos$: Observable<ToDo[]> = this.http.get<ToDo[]>('/api/todos');

  constructor(private http: HttpClient, private _store: Store) {}

  logout() {
    this._store.dispatch(submitLogout());
  }
}
