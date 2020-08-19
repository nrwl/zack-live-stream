import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { createPaginationOptions } from './create-pagination-options.function';

@Component({
  selector: 'zack-live-stream-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PaginationComponent,
      multi: true,
    },
  ],
})
export class PaginationComponent
  implements OnDestroy, OnChanges, ControlValueAccessor {
  @Input() totalPages: number;
  private _totalPages$ = new ReplaySubject<number>(1);
  private _destroy$ = new Subject<void>();
  paginationOptions$: Observable<number[]>;
  currentPageControl: FormControl;

  writeValue(value: number) {
    if (this.currentPageControl) {
      this.currentPageControl.setValue(value);
    } else {
      this.currentPageControl = new FormControl(value);
      this.paginationOptions$ = combineLatest([
        this.currentPageControl.valueChanges.pipe(
          startWith(this.currentPageControl.value)
        ),
        this._totalPages$,
      ]).pipe(
        map(([currentPage, totalPages]) =>
          createPaginationOptions(currentPage, totalPages)
        )
      );
      // TODO: subscribe to ensure that current value is always at least equal to totalPages (not greater than)
    }
  }

  registerOnChange(fn) {
    this.currentPageControl.valueChanges
      .pipe(
        startWith(this.currentPageControl.value), // do we need this?
        takeUntil(this._destroy$)
      )
      .subscribe(fn);
  }

  registerOnTouched() {}

  ngOnChanges(change: SimpleChanges): void {
    if (change.totalPages) {
      this._totalPages$.next(this.totalPages);
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete(); // Do we need this?
  }
}
