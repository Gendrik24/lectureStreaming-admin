import { Component } from '@angular/core';
import {ISidenavLink} from "./model/sidenav/i-sidenav-link";
import {faBell, faGauge, faTowerCell} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lectureStreaming-admin';

  readonly sidenavLinks: ISidenavLink[] = [
    {endpoint: "/broadcasts", title: "Broadcasts", icon: faTowerCell},
    {endpoint: "/monitor", title: "System Monitor", icon: faGauge},
    {endpoint: "/notifications", title: "Notifications", icon: faBell}
  ]
}
