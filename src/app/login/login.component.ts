import {Component, InjectionToken, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest'; // non-static
import 'rxjs/add/observable/combineLatest'; // static
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';
import {AlertService} from '../services/alert.service';
import {CustomValidators} from '../custom-validators';


export const serverUrlToken = new InjectionToken<string>('SERVER_URL');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // usernameField.nativeElement is same as pqr variable of template
  // @ViewChild('pqr') usernameField: any;

  // passwordField.nativeElement is same as xyz variable of template
  // @ViewChild('xyz') passwordField: any;


  loginForm: FormGroup;
  usernameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required, CustomValidators.greaterLength(this.usernameControl)]);

  // touched/untouched, pristine/dirty, valid/invalid

  myValue: string;

  constructor(private myAlertService: AlertService) {
    this.loginForm = new FormGroup({
      myUsername: this.usernameControl,
      passwordField: this.passwordControl
    });
  }

  // 1. url, 2. method (GET, POST, PUT, PATCH, DELETE), 3. data - kya aur kaise
  //

  // same as above
  // private myAlertService: AlertService;
  // constructor(localAlert: AlertService){
  //   this.myAlertService = localAlert;
  // }

  // prashant
  // meerut
  // prashant@gmail.com

  // suresh panwar
  // ghaziabad
  // suresh@gmail.com

  // ramesh
  // new delhi
  // ramesh@gamil.com

  ngOnInit() {
    // setInterval(() => {
    //   console.log('Data from form is ', this.usernameField.nativeElement.value, this.passwordField.nativeElement.value);
    // }, 3000);

    //
    // setInterval(() => {
    //   console.log('Data from form is ', this.usernameControl.value, this.passwordControl.value);
    // }, 3000);

    // this.usernameControl.valueChanges
    //   .filter(username => username.length > 3)
    //   .debounceTime(2000)
    //   .distinctUntilChanged()
    //   .map(username => 'Dear ' + username)
    //   .subscribe(filteredUsername => {
    //     console.log("Search results for " + filteredUsername);
    //     this.myValue = filteredUsername;
    //   });
    //
    // Observable.combineLatest(this.usernameControl.valueChanges,
    //   this.passwordControl.valueChanges, (lu, lp) => lu.length + lp.length)
    //   .subscribe(value => console.log("combineLatest output: " + value));

    // this.usernameControl.valueChanges.startWith('').combineLatest(
    //   this.passwordControl.valueChanges.startWith(''), (lu, lp) => {
    //     return {username: lu, password: lp};
    //   }).skip(1)
    //   .subscribe(value => console.log('combineLatest output: ', value));
    //
    //
    // this.usernameControl.valueChanges.debounce(username => Observable.of(0).delay(username.length * 100))
    //   .subscribe(value => console.log(value));
    //
    //
    // this.usernameControl.valueChanges.takeWhile(uname => uname.length < 5)
    //   .reduce((acc, value) => acc + value.length, 0)
    //   .subscribe(data => console.log(data));
    //
    //
    // this.usernameControl.valueChanges.concatMap(value => Observable.interval(value.length * 100))
    //   .subscribe(value => console.log(value));


    // if function given to map returns Observable of String,
    // then output of map will be Observable of Observable of String

    // but if function given to switchMap returns Observable of String,
    // then output of switchMap will be Observable of String

    this.loginForm.valueChanges.subscribe(value => console.log('changed form value', value));
  }

  login() {
    console.log('form submitted', this.usernameControl.value, this.passwordControl.value);

    this.loginForm.reset();

    this.myAlertService.success('Login successful');
  }

  goToSignup() {
  }
}

// http://reactivex.io/documentation/operators.html
// http://rxmarbles.com/
