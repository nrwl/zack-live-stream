import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContentPost } from '@zack-live-stream/content-post-utils';
import { Observable } from 'rxjs';
import { ContentPostService } from '../content-post.service';
import { Store, select } from '@ngrx/store';
import {
  initContentPostList,
  selectAllPosts,
} from '@zack-live-stream/frontend/our-circle-ngrx-utils';

@Component({
  selector: 'our-circle-content-post-list',
  templateUrl: './content-post-list.component.html',
  styleUrls: ['./content-post-list.component.scss'],
})
export class ContentPostListComponent implements OnInit {
  list$: Observable<ContentPost[]> = this._store.pipe(select(selectAllPosts));

  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(initContentPostList());
  }
}
