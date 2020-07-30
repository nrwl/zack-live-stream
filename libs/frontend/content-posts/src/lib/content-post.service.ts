import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CreateContentPostRequestBody,
  ContentPost,
} from 'libs/content-post-utils/src/lib/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentPostService {
  constructor(private _http: HttpClient) {}

  getContentPosts(): Observable<ContentPost[]> {
    return this._http.get<ContentPost[]>('/api/content-posts');
  }

  getContentPostById(id: string): Observable<ContentPost> {
    return this._http.get<ContentPost>(`/api/content-posts/${id}`);
  }

  createContentPost(
    requestBody: CreateContentPostRequestBody
  ): Observable<ContentPost> {
    return this._http.post<ContentPost>(
      '/api/content-posts/create-post',
      requestBody
    );
  }
}
