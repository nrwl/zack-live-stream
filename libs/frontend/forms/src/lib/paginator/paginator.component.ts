import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

export interface PaginatorValue {
  itemsPerPage: number;
  currentPage: number;
}

@Component({
  selector: 'zack-live-stream-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PaginatorComponent,
      multi: true,
    },
  ],
})
export class PaginatorComponent
  implements OnDestroy, OnChanges, ControlValueAccessor {
  @Input() totalItems: number;
  private _totalItems$ = new ReplaySubject<number>(1);
  form: FormGroup;
  private _destroying$ = new Subject<void>();

  writeValue(v: PaginatorValue) {
    if (this.form) {
      this.form.setValue(v);
    } else {
      this.form = new FormGroup({
        itemsPerPage: new FormControl(v.itemsPerPage),
        currentPage: new FormControl(v.currentPage),
      });
    }
  }

  registerOnChange(fn) {
    this.form.valueChanges
      .pipe(
        takeUntil(this._destroying$),
        startWith(this.form.value) // ?
      )
      .subscribe(fn);
  }

  registerOnTouched() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.totalItems) {
      this._totalItems$.next(this.totalItems);
    }
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
