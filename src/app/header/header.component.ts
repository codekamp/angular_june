import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// ViewEncapsulation.None - inner css will impact outside world and vice versa

// ViewEncapsulation.Emulated - This is default value. Outside css will impact inner
// ... but inner won't impact outside. Random attributes are added to achieve this

// ViewEncapsulation.Native - Ouside won't impact inside and vice versa.
// /// uses ShadowDom, which is not available in all browsers.
