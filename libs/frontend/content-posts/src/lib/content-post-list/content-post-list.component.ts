import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContentPost } from '@zack-live-stream/content-post-utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'our-circle-content-post-list',
  templateUrl: './content-post-list.component.html',
  styleUrls: ['./content-post-list.component.scss'],
})
export class ContentPostListComponent {
  list$: Observable<ContentPost[]> = this._http.get<ContentPost[]>(
    '/api/content-posts'
  );

  constructor(private _http: HttpClient) {}
}
