import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPostListComponent } from './content-post-list/content-post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateContentPostComponent } from './create-content-post/create-content-post.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [ContentPostListComponent, CreateContentPostComponent],
  exports: [ContentPostListComponent, CreateContentPostComponent],
})
export class FrontendContentPostsModule {}
