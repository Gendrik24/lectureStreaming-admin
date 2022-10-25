import {Component, Input, OnInit} from '@angular/core';
import {ISidenavLink} from "../../model/sidenav/i-sidenav-link";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input()
  navLinks: ISidenavLink[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

}
