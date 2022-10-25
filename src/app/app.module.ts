import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BroadcastOverviewComponent } from './components/broadcast-overview/broadcast-overview.component';
import { MonitorOverviewComponent } from './components/monitor-overview/monitor-overview.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BroadcastOverviewComponent,
    MonitorOverviewComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
