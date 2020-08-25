import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FrontendFormsModule } from '@zack-live-stream/frontend/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { PaginatorTestBedComponent } from './paginator-test-bed/paginator-test-bed.component';
import { RouterModule } from '@angular/router';
import { PaginationTestBedComponent } from './pagination-test-bed/pagination-test-bed.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorTestBedComponent,
    PaginationTestBedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FrontendFormsModule,
    ReactiveComponentModule,
    RouterModule.forRoot([
      { path: 'pagination', component: PaginationTestBedComponent },
      { path: 'paginator', component: PaginatorTestBedComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
