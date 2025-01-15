import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketDetailComponent } from './pages/ticket-detail/ticket-detail.component';
// import { BiodataComponent } from './pages/biodata/biodata.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tickets/:id',
    component: TicketDetailComponent
  }
  // {
  //   path: 'biodata/:id',
  //   component: BiodataComponent
  // }
];
