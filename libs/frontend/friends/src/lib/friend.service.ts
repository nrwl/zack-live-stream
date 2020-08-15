import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@zack-live-stream/auth-utils';
import { GetFriendsResponseBody } from '@zack-live-stream/frontend/our-circle-ngrx-utils';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private httpClient: HttpClient) {}

  getFriends(): Observable<GetFriendsResponseBody> {
    return this.httpClient.get<GetFriendsResponseBody>('/api/friends/');
  }

  requestAddFriend(targetUserId: string): Observable<GetFriendsResponseBody> {
    return this.httpClient.post<GetFriendsResponseBody>(
      '/api/friends/request-friendship',
      { userId: targetUserId }
    );
  }

  approveFriend(targetUserId: string): Observable<GetFriendsResponseBody> {
    return this.httpClient.post<GetFriendsResponseBody>(
      '/api/friends/approve-friendship',
      { userId: targetUserId }
    );
  }
}
