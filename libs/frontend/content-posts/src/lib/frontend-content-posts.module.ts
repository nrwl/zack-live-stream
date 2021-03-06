import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPostListComponent } from './content-post-list/content-post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateContentPostComponent } from './create-content-post/create-content-post.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/content-post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContentPostEffects } from './state/content-post.effects';
import { ReactiveComponentModule } from '@ngrx/component';
import { ContentPostComponent } from './content-post/content-post.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('content-posts', reducer),
    EffectsModule.forFeature([ContentPostEffects]),
    ReactiveComponentModule,
  ],
  declarations: [ContentPostListComponent, CreateContentPostComponent, ContentPostComponent],
  exports: [ContentPostListComponent, CreateContentPostComponent],
})
export class FrontendContentPostsModule {}
