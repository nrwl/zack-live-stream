import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'zack-live-stream-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageControl = new FormControl(1);
  totalPagesControl = new FormControl(5);
  totalPages$: Observable<number> = this.totalPagesControl.valueChanges.pipe(
    startWith(this.totalPagesControl.value)
  );
}
