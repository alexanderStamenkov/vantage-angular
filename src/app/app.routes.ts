import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvestorDetailComponent } from './pages/investor-detail/investor-detail.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'investor/:id', component: InvestorDetailComponent },
  { path: '**', redirectTo: '' },
];
