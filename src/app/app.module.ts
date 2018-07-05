import './rxjs-imports';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {ImgCaptionComponent} from './img-caption/img-caption.component';
import {LoginComponent, serverUrlToken} from './login/login.component';
import { FiveStartComponent } from './five-start/five-start.component';
import { StarComponent } from './star/star.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {myRoutes} from './routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertService} from './services/alert.service';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {EventBus} from './services/event-bus';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { EmailsComponent } from './emails/emails.component';
import {AuthGuard} from './guards/auth.guard';
import { CenterSpinnerComponent } from './center-spinner/center-spinner.component';
import { VideoCardComponent } from './video-card/video-card.component';
import {FlexAlignmentHackDirective} from './directives/flex-alignment-hack';
import {TruncatePipe} from './pipes/truncate';
import {StoreModule} from '@ngrx/store';
import {reducers} from './state/index';
import {StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {VideoManager} from './managers/video.manager';

@NgModule({
  declarations: [
    AppComponent,
    ImgCaptionComponent,
    LoginComponent,
    FiveStartComponent,
    StarComponent,
    SignupComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    VideosComponent,
    EmailsComponent,
    CenterSpinnerComponent,
    VideoCardComponent,
    FlexAlignmentHackDirective,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(myRoutes),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    {provide: AlertService, useClass: AlertService},
    {provide: serverUrlToken, useValue: 'https://codekamp.in'},
    ApiService,
    EventBus,
    AuthGuard,
    VideoManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
