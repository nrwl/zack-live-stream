import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'zack-live-stream-pagination-test-bed',
  templateUrl: './pagination-test-bed.component.html',
  styleUrls: ['./pagination-test-bed.component.scss'],
})
export class PaginationTestBedComponent {
  pageControl = new FormControl(1);
  totalPagesControl = new FormControl(5);
  totalPages$: Observable<number> = (this.totalPagesControl
    .valueChanges as Observable<number>).pipe(
    startWith(this.totalPagesControl.value as number)
  );
}
