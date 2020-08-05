import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { SetAuthHeaderInterceptor } from './set-auth-header.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetAuthHeaderInterceptor,
      multi: true,
    },
  ],
})
export class FrontendAuthModule {}
