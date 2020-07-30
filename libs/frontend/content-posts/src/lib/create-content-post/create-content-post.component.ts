import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { ContentPost } from '@zack-live-stream/content-post-utils';
import { CreateContentPostRequestBody } from 'libs/content-post-utils/src/lib/models';

@Component({
  selector: 'our-circle-create-content-post',
  templateUrl: './create-content-post.component.html',
  styleUrls: ['./create-content-post.component.scss'],
})
export class CreateContentPostComponent {
  createPostControl = new FormControl('', [Validators.required]);

  constructor(private _http: HttpClient) {}

  submit() {
    this._http
      .post<ContentPost>('/api/content-posts/create-post', {
        content: this.createPostControl.value as string,
      })
      .subscribe();
  }
}
