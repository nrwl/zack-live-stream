import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FrontendFormsModule } from '@zack-live-stream/frontend/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FrontendFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
