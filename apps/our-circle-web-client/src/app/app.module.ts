import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrontendContentPostsModule } from '@zack-live-stream/frontend/content-posts';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(() => {}),
    EffectsModule.forRoot([]),
    FrontendContentPostsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 2500,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
