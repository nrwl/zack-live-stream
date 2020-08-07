import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { submitLoginForm } from '@zack-live-stream/frontend/auth-ngrx-utils';

@Component({
  selector: 'our-circle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _store: Store) {}
  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });

  submitLogin() {
    this._store.dispatch(submitLoginForm(this.form.value));
  }
}
