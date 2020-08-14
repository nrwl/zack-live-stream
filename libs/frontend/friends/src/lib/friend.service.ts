import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@zack-live-stream/auth-utils';

export interface GetFriendsResponseBody {
  friends: User[];
  findableFriends: User[];
  friendRequests: User[];
}

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private httpClient: HttpClient) {}

  getFriends(): Observable<GetFriendsResponseBody> {
    return this.httpClient.get<GetFriendsResponseBody>('/api/friends/');
  }
}
