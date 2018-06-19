import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signup() {
    console.log("signup form submitted");
  }



  goToLogin() {
  }
}
