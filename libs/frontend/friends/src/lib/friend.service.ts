import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@zack-live-stream/auth-utils';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private httpClient: HttpClient) {}

  getFriends(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/friends/');
  }
}
