import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  LoginRequestBody,
  LoginResponseBody,
} from '@zack-live-stream/auth-utils';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const ACCESS_TOKEN_KEY = 'accessToken';

@Injectable()
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  login(requestBody: LoginRequestBody): Observable<LoginResponseBody> {
    return this._httpClient
      .post<LoginResponseBody>('/api/auth/login', requestBody)
      .pipe(
        tap((response) => {
          if (response.result === 'error') {
            return;
          }
          this.setAccessToken(response.accessToken);
        })
      );
  }

  logout(): Observable<void> {
    return this._httpClient.post<void>('/api/auth/logout', {});
  }

  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  setAccessToken(accessToken: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }

  removeAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}
