import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const myRoutes: Routes = [
  {
    path: 'hello', // codekamp.in/hello, codekamp.in/hello/*
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '**',
    component: NotFoundComponent
  }
];
