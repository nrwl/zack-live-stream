import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrontendAuthModule } from '@zack-live-stream/frontend/auth';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(() => {}),
    EffectsModule.forRoot([]),
    FrontendAuthModule,
    HttpClientModule,
    ReactiveComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
