import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'our-circle-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  working$: Observable<boolean> = this._httpClient.get('/api').pipe(
    map(() => true),
    catchError(() => of(false))
  );

  constructor(private _httpClient: HttpClient) {}
}
