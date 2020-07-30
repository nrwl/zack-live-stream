import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  createNewContentPostSucceeds,
  requestCreateNewContentPost,
} from '@zack-live-stream/frontend/our-circle-web-client-actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'our-circle-create-content-post',
  templateUrl: './create-content-post.component.html',
  styleUrls: ['./create-content-post.component.scss'],
})
export class CreateContentPostComponent implements OnDestroy {
  private _destorying$ = new Subject<void>();
  createPostControl = new FormControl('', [Validators.required]);

  constructor(private _store: Store, private _actions: Actions) {
    this._actions
      .pipe(takeUntil(this._destorying$), ofType(createNewContentPostSucceeds))
      .subscribe(() => this.createPostControl.reset());
  }

  submit() {
    this._store.dispatch(
      requestCreateNewContentPost({
        requestBody: { content: this.createPostControl.value },
      })
    );
  }

  ngOnDestroy() {
    this._destorying$.next();
  }
}
