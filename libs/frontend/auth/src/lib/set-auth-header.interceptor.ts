import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class SetAuthHeaderInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this._authService.getAccessToken();
    if (!request.url.startsWith('/api') || !token) {
      return next.handle(request);
    }
    const headers = request.headers.set('Authorization', token);
    return next.handle(request.clone({ headers }));
  }
}
