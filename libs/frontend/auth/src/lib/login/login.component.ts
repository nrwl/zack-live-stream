import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'our-circle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _authService: AuthService) {}
  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });

  submitLogin() {
    this._authService.login(this.form.value).subscribe();
  }
}
