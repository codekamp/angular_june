import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventBus} from '../services/event-bus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string | null;

  constructor(private eventBus: EventBus) { }

  ngOnInit() {
    this.username = localStorage.getItem('USER_NAME');

    this.eventBus.listen('LOGIN_SUCCESS').subscribe(user => {
      this.username = user.first_name + ' ' + user.last_name;
    });
  }
}


// ViewEncapsulation.None - inner css will impact outside world and vice versa

// ViewEncapsulation.Emulated - This is default value. Outside css will impact inner
// ... but inner won't impact outside. Random attributes are added to achieve this

// ViewEncapsulation.Native - Ouside won't impact inside and vice versa.
// /// uses ShadowDom, which is not available in all browsers.
