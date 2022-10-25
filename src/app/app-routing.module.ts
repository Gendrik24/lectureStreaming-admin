import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BroadcastOverviewComponent} from "./components/broadcast-overview/broadcast-overview.component";
import {MonitorOverviewComponent} from "./components/monitor-overview/monitor-overview.component";
import {NotificationsComponent} from "./components/notifications/notifications.component";

const routes: Routes = [
  { path: "broadcasts", component: BroadcastOverviewComponent },
  { path: "monitor", component: MonitorOverviewComponent},
  { path: "notifications", component: NotificationsComponent},
  { path: '',   redirectTo: "/broadcasts", pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
