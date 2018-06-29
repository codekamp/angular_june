import {Component, InjectionToken, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../services/alert.service';
import {ApiService} from '../services/api.service';
import {EventBus} from '../services/event-bus';
import {Router} from '@angular/router';


export const serverUrlToken = new InjectionToken<string>('SERVER_URL');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  usernameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);

  loading = false;

  constructor(private myAlertService: AlertService,
              private apiService: ApiService,
              private eventBus: EventBus,
              private router: Router) {
    this.loginForm = new FormGroup({
      myUsername: this.usernameControl,
      passwordField: this.passwordControl
    });
  }


  ngOnInit() {
  }

  login() {
    this.loading = true;
    const obs = this.apiService.login(this.usernameControl.value, this.passwordControl.value);
    obs.subscribe(data => {
        localStorage.setItem('USER_TOKEN', data.token);
        localStorage.setItem('USER_NAME', data.user.first_name + ' ' + data.user.last_name);

        this.eventBus.announce('LOGIN_SUCCESS', data.user);

        this.router.navigate(['']);
        this.myAlertService.success('Login Successful!');
      },
      error => {
        this.loading = false;
        console.log('error is', error);
        this.myAlertService.error(error.error.message);
      });

    console.log('after subscribe');
  }
}
