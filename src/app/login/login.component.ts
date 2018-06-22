import {Component, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

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


  usernameControl = new FormControl();
  passwordControl = new FormControl();

  myValue: string;

  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   console.log('Data from form is ', this.usernameField.nativeElement.value, this.passwordField.nativeElement.value);
    // }, 3000);

    //
    // setInterval(() => {
    //   console.log('Data from form is ', this.usernameControl.value, this.passwordControl.value);
    // }, 3000);

    this.usernameControl.valueChanges
      .filter(username => username.length > 3)
      .debounceTime(2000)
      .distinctUntilChanged()
      .map(username => 'Dear ' + username)
      .subscribe(filteredUsername => {
        console.log("Search results for " + filteredUsername);
        this.myValue = filteredUsername;
      });
  }

  login(username:any, password:any) {
    console.log("form submitted", username.value, password.value);

    username.value = '';
    password.value = '';
  }

  goToSignup() {
  }
}

// http://reactivex.io/documentation/operators.html
// http://rxmarbles.com/
