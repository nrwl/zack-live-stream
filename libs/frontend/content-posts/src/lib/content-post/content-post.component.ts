import { Component, OnInit, Input } from '@angular/core';
import { ContentPost } from '@zack-live-stream/content-post-utils';

@Component({
  selector: 'our-circle-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.scss'],
})
export class ContentPostComponent {
  @Input() contentPost: ContentPost;
}
