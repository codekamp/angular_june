import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  fnameControl: FormControl;
  lnameControl: FormControl;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const user = this.apiService.user;
    const fname = user ? user.first_name : '';
    const lname = user ? user.last_name : '';

    this.fnameControl = new FormControl(fname);
    this.lnameControl = new FormControl(lname);
  }

  save() {
    this.apiService.user.first_name = this.fnameControl.value;
    this.apiService.user.last_name = this.lnameControl.value;

    console.log('new user is', this.apiService.user);
  }

}
