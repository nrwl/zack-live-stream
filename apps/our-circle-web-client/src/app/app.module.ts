import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrontendContentPostsModule } from '@zack-live-stream/frontend/content-posts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FrontendContentPostsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
