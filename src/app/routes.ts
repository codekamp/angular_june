import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VideosComponent} from './videos/videos.component';
import {EmailsComponent} from './emails/emails.component';
import {AuthGuard} from './guards/auth.guard';

export const myRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/videos'
  },
  {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'videos',
        component: VideosComponent
      },
      {
        path: 'emails',
        component: EmailsComponent
      }
    ]
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];
